"use client";

import { Copy, Share2, CheckCheck, Link2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REFERRAL_LINK = "https://cineflix.app/ref/USER12345";

export function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = async () => {
    setSharing(true);
    if (navigator.share) {
      await navigator.share({ title: "Join CineFlix", url: REFERRAL_LINK }).catch(() => {});
    } else {
      handleCopy();
    }
    setTimeout(() => setSharing(false), 800);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]"
      style={{ boxShadow: "0 0 40px hsl(45 95% 58% / 0.06), 0 20px 60px hsl(0 0% 0% / 0.3)" }}
    >
      {/* Top glow strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      {/* Ambient blob */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-primary/6 blur-3xl pointer-events-none" />

      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <Link2 size={13} className="text-primary" />
          </div>
          <h3 className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Referral Link
          </h3>
        </div>

        {/* Input */}
        <div
          className="flex items-center gap-2 mb-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 focus-within:border-primary/40 focus-within:shadow-[0_0_0_3px_hsl(45_95%_58%/0.1)] transition-all duration-200"
        >
          <Link2 size={12} className="text-muted-foreground/50 shrink-0" />
          <input
            readOnly
            value={REFERRAL_LINK}
            className="flex-1 bg-transparent text-xs text-muted-foreground focus:outline-none truncate min-w-0"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleCopy}
            className="relative flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold overflow-hidden transition-all duration-300"
            style={
              copied
                ? {
                    background: "hsl(145 60% 40% / 0.15)",
                    borderColor: "hsl(145 60% 40% / 0.4)",
                    color: "#34d399",
                    boxShadow: "0 0 16px hsl(145 60% 40% / 0.2)",
                  }
                : {
                    background: "hsl(45 95% 58% / 0.08)",
                    borderColor: "hsl(45 95% 58% / 0.25)",
                    color: "hsl(45 95% 58%)",
                  }
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5"
                >
                  <CheckCheck size={13} /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy size={13} /> Copy
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-secondary/25 bg-secondary/8 text-secondary text-xs font-semibold hover:bg-secondary/15 hover:border-secondary/40 hover:shadow-[0_0_16px_hsl(200_100%_55%/0.2)] transition-all duration-200"
          >
            <motion.div
              animate={sharing ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Share2 size={13} />
            </motion.div>
            Share
          </motion.button>
        </div>
      </div>
    </div>
  );
}
