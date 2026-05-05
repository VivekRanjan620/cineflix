"use client";

import { useState } from "react";
import { KeyRound, Eye, EyeOff, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function PasswordPage() {
  const [show, setShow] = useState({ current: false, newPass: false, confirm: false });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });

  function toggle(field: keyof typeof show) {
    setShow((p) => ({ ...p, [field]: !p[field] }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.newPass !== form.confirm) { setError("New passwords do not match."); return; }
    if (form.newPass.length < 8) { setError("Password must be at least 8 characters."); return; }
    setSaving(true);
    // TODO: real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSaving(false);
    setSuccess(true);
    setForm({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setSuccess(false), 4000);
  }

  const fields = [
    { label: "Current Password",     name: "current",  showKey: "current"  as const },
    { label: "New Password",          name: "newPass",  showKey: "newPass"  as const },
    { label: "Confirm New Password",  name: "confirm",  showKey: "confirm"  as const },
  ];

  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans">

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 pt-6 pb-28">

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38 }}
          className="relative rounded-2xl overflow-hidden border border-primary/25 backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)] p-5"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <KeyRound className="text-primary" size={18} />
            </div>
            <div>
              <p className="font-display text-sm text-primary tracking-wide">Change Password</p>
              <p className="text-xs text-muted-foreground">Keep your account secure</p>
            </div>
          </div>

          {/* Success banner */}
          {success && (
            <div className="flex items-center gap-2 mb-5 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm">
              <ShieldCheck size={15} /> Password updated successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((f) => (
              <div key={f.name} className="space-y-2">
                <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </Label>
                <div className="relative">
                  <Input
                    name={f.name}
                    type={show[f.showKey] ? "text" : "password"}
                    placeholder="••••••••"
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.03] border-white/[0.08] focus:border-primary/50 h-11 text-foreground pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => toggle(f.showKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {show[f.showKey] ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
            ))}

            {error && (
              <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 px-4 py-2.5 rounded-xl">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={saving}
              className="w-full h-11 bg-primary text-primary-foreground font-semibold hover:bg-primary-glow hover:shadow-[0_0_20px_hsl(45_95%_58%/0.4)] transition-all"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Updating...
                </span>
              ) : "Update Password"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}