"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, RotateCcw, ChevronDown, DollarSign, FileText } from "lucide-react";

export function QuickActionForm() {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("Topup");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleReset = () => {
    setAmount("");
    setWallet("Topup");
    setNote("");
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  const inputBase =
    "w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200 backdrop-blur-sm";

  const focusStyle = (field: string) =>
    focusedField === field
      ? "border-primary/50 shadow-[0_0_0_3px_hsl(45_95%_58%/0.12),0_0_16px_hsl(45_95%_58%/0.1)]"
      : "border-white/[0.07] hover:border-white/[0.12]";

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]"
      style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.3)" }}
    >
      {/* Top glow strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="p-5">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <Zap size={13} className="text-primary fill-primary" />
          </div>
          <h3 className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Quick Action
          </h3>
        </div>

        <div className="space-y-4">
          {/* Amount */}
          <div className="relative">
            <label className="text-[10px] text-muted-foreground mb-2 block uppercase tracking-wider">
              Amount
            </label>
            <div className="relative">
              <DollarSign size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onFocus={() => setFocusedField("amount")}
                onBlur={() => setFocusedField(null)}
                placeholder="0.00"
                className={`${inputBase} pl-9 ${focusStyle("amount")}`}
              />
            </div>
          </div>

          {/* Wallet Type */}
          <div className="relative">
            <label className="text-[10px] text-muted-foreground mb-2 block uppercase tracking-wider">
              Wallet Type
            </label>
            <div className="relative">
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                onFocus={() => setFocusedField("wallet")}
                onBlur={() => setFocusedField(null)}
                className={`${inputBase} appearance-none pr-9 ${focusStyle("wallet")}`}
              >
                <option value="Topup" className="bg-[hsl(230_30%_8%)]">Topup Wallet</option>
                <option value="Income" className="bg-[hsl(230_30%_8%)]">Income Wallet</option>
                <option value="ROI" className="bg-[hsl(230_30%_8%)]">ROI Wallet</option>
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
            </div>
          </div>

          {/* Note */}
          <div className="relative">
            <label className="text-[10px] text-muted-foreground mb-2 block uppercase tracking-wider">
              Note <span className="normal-case">(optional)</span>
            </label>
            <div className="relative">
              <FileText size={14} className="absolute left-3.5 top-3.5 text-muted-foreground/50" />
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onFocus={() => setFocusedField("note")}
                onBlur={() => setFocusedField(null)}
                placeholder="Add a note..."
                rows={3}
                className={`${inputBase} pl-9 resize-none ${focusStyle("note")}`}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={loading}
              className="relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider overflow-hidden transition-all duration-200 disabled:opacity-70"
              style={{
                background: "linear-gradient(135deg, hsl(45 95% 58%), hsl(35 100% 50%))",
                boxShadow: loading ? "none" : "0 0 20px hsl(45 95% 58% / 0.35), 0 4px 16px hsl(0 0% 0% / 0.3)",
                color: "hsl(230 50% 6%)",
              }}
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-background/40 border-t-background animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <Zap size={13} className="fill-current" />
                  Submit
                </>
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50 hover:shadow-[0_0_16px_hsl(200_100%_55%/0.2)] transition-all duration-200"
            >
              <RotateCcw size={13} />
              Reset
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
