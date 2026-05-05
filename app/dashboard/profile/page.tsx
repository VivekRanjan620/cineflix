"use client";

import { useState } from "react";
import { User, Save, Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "USER12345",
    email: "user@example.com",
    phone: "",
    referralCode: "REF12345",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
  }

  function copyReferral() {
    navigator.clipboard.writeText(form.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans">

      {/* Ambient blobs — same as DashboardClient */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28">

        {/* Back */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38 }}
          className="relative rounded-2xl overflow-hidden border border-primary/25 backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)] mb-5"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
          <div className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[hsl(35_100%_50%)] flex items-center justify-center text-xl font-bold text-background font-display shadow-[0_0_20px_hsl(45_95%_58%/0.5)]">
              U
            </div>
            <div>
              <p className="font-display text-base text-primary tracking-wide">{form.name}</p>
              <p className="text-xs text-muted-foreground">{form.email}</p>
              <button className="text-xs text-secondary hover:text-accent mt-1 transition-colors">
                Change avatar
              </button>
            </div>
            <div className="ml-auto">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <User className="text-primary" size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.07 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)] p-5"
        >
          <h2 className="font-display text-xs uppercase tracking-widest mb-4 text-muted-foreground">
            Account Information
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Full Name</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-white/[0.03] border-white/[0.08] focus:border-primary/50 h-11 text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-white/[0.03] border-white/[0.08] focus:border-primary/50 h-11 text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone (optional)</Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white/[0.03] border-white/[0.08] focus:border-primary/50 h-11 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-wider text-muted-foreground">Referral Code</Label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value={form.referralCode}
                    className="bg-white/[0.03] border-white/[0.08] h-11 font-mono tracking-widest text-primary"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={copyReferral}
                    className="h-11 w-11 border-white/[0.08] bg-white/[0.03] hover:border-primary/40 shrink-0"
                  >
                    {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                  </Button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={saving}
              className="bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-[0_0_20px_hsl(45_95%_58%/0.4)] h-11 px-8 font-semibold transition-all"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2"><Save size={14} /> Save changes</span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}