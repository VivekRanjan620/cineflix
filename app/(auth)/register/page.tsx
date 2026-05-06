"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Film, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    referralCode: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real registration API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    // After register: redirect to /login or auto-login → /user/dashboard
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] animate-fade-in">

        {/* Logo */}
<div className="flex items-center justify-center gap-2 mb-6">
  <Link href="/#home" className="flex items-center gap-2">
    <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
      <Film className="text-primary" size={24} />
    </div>
    <span className="font-display text-2xl font-bold text-primary tracking-wider">
      CineFlix
    </span>
  </Link>
</div>

        <h1 className="text-xl font-semibold text-foreground text-center mb-1">
          Create your account
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Join CineFlix and start earning
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-muted-foreground text-xs uppercase tracking-wider">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-muted border-border focus:border-primary/50 h-11"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground text-xs uppercase tracking-wider">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-muted border-border focus:border-primary/50 h-11"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-muted-foreground text-xs uppercase tracking-wider">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                className="bg-muted border-border focus:border-primary/50 h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Referral Code (optional) */}
          <div className="space-y-2">
            <Label htmlFor="referralCode" className="text-muted-foreground text-xs uppercase tracking-wider">
              Referral Code{" "}
              <span className="normal-case text-muted-foreground/50">(optional)</span>
            </Label>
            <Input
              id="referralCode"
              name="referralCode"
              type="text"
              placeholder="e.g. RAHUL2024"
              value={form.referralCode}
              onChange={handleChange}
              className="bg-muted border-border focus:border-primary/50 h-11 uppercase"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-2 bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-all hover:shadow-[var(--glow-soft)] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Creating account...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <UserPlus size={16} />
                Register
              </span>
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary-glow transition-colors font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}