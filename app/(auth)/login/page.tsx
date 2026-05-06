"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Film, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real auth call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    // After login: redirect based on role
    // router.push("/user/dashboard") or "/admin/dashboard"
  }

  return (
    <div className="w-full max-w-md">
      {/* Card */}
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
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="bg-muted border-border focus:border-primary/50 focus:ring-primary/20 h-11"
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
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                className="bg-muted border-border focus:border-primary/50 focus:ring-primary/20 h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-xs text-primary hover:text-primary-glow transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-all hover:shadow-[var(--glow-soft)] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Logging in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </span>
            )}
          </Button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          New here?{" "}
          <Link href="/register" className="text-primary hover:text-primary-glow transition-colors font-medium">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}