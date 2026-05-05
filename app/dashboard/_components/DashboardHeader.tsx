"use client";

import { Bell, Menu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: Props) {
  const [bellPulse, setBellPulse] = useState(false);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-20 h-16 flex items-center px-4 gap-3 border-b border-white/[0.06] backdrop-blur-2xl bg-[hsl(230_35%_4%/0.85)]"
      style={{ boxShadow: "0 1px 0 hsl(45 95% 58% / 0.08), 0 4px 24px hsl(0 0% 0% / 0.4)" }}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <motion.button
        whileTap={{ scale: 0.88 }}
        onClick={onMenuClick}
        className="p-2 rounded-xl border border-white/[0.06] bg-white/[0.04] hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 text-muted-foreground hover:text-primary"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </motion.button>

      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <Zap size={12} className="text-primary fill-primary" />
          <span className="font-display text-sm bg-gradient-to-r from-primary via-[hsl(35_100%_60%)] to-secondary bg-clip-text text-transparent leading-none tracking-wide">
            CineFlix
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground mt-0.5 font-mono tracking-widest">USER12345</span>
      </div>

      <motion.button
        whileTap={{ scale: 0.88 }}
        onClick={() => setBellPulse(true)}
        onAnimationEnd={() => setBellPulse(false)}
        className="p-2 rounded-xl border border-white/[0.06] bg-white/[0.04] hover:bg-secondary/10 hover:border-secondary/30 transition-all duration-200 text-muted-foreground hover:text-secondary relative"
        aria-label="Notifications"
      >
        <Bell size={18} className={bellPulse ? "animate-[wiggle_0.4s_ease]" : ""} />
        {/* Notification dot with pulse ring */}
        <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_6px_hsl(45_95%_58%)]" />
        </span>
      </motion.button>
    </motion.header>
  );
}
