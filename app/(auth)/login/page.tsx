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
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  }

  return (
    // ── Page background ────────────────────────────────────────────────────
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden bg-[hsl(230_35%_6%)]">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(45 95% 58%) 1px, transparent 1px), linear-gradient(90deg, hsl(45 95% 58%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Card ─────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-md animate-fade-in">

        {/* Glow ring behind card */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 blur-sm" />

        <div className="relative rounded-3xl border border-white/[0.08] bg-[hsl(230_30%_9%/0.85)] backdrop-blur-2xl p-8 shadow-[0_32px_80px_hsl(0_0%_0%/0.5)]">

          {/* Top shimmer line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />

          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-7">
            <Link href="/#home" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <Film className="text-primary" size={22} />
              </div>
              <span className="font-display text-2xl font-bold text-primary tracking-wider">
                CineFlix
              </span>
            </Link>
          </div>

          <h1 className="text-xl font-semibold text-foreground text-center mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-7">
            Login to access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground text-[10px] uppercase tracking-widest">
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
                className="bg-white/[0.04] border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.06] h-11 transition-colors placeholder:text-muted-foreground/40"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-muted-foreground text-[10px] uppercase tracking-widest">
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
                  className="bg-white/[0.04] border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.06] h-11 pr-11 transition-colors placeholder:text-muted-foreground/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <div className="text-right">
                <Link href="/forgot-password" className="text-xs text-primary/70 hover:text-primary transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_hsl(45_95%_58%/0.4)] disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn size={15} />
                  Login
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link href="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}