"use client";

import Link from "next/link";
import { X, LayoutDashboard, User, Users, Wallet, LogOut, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, active: true },
  { label: "Profile", href: "/dashboard", icon: User, active: false },
  { label: "Team", href: "/dashboard", icon: Users, active: false },
  { label: "Wallet", href: "/dashboard", icon: Wallet, active: false },
  { label: "Logout", href: "/", icon: LogOut, active: false },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.24, ease: [0.4, 0, 1, 1] as [number,number,number,number] } },
};

const itemVariants = {
  hidden: { x: -16, opacity: 0 },
  show: (i: number) => ({
    x: 0, opacity: 1,
    transition: { delay: 0.08 + i * 0.055, duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export function Sidebar({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="sidebar"
          variants={sidebarVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed top-0 left-0 h-full w-72 z-40 flex flex-col border-r border-white/[0.07] backdrop-blur-2xl bg-[hsl(230_35%_4%/0.95)]"
          style={{ boxShadow: "4px 0 40px hsl(0 0% 0% / 0.6), inset -1px 0 0 hsl(45 95% 58% / 0.06)" }}
        >
          {/* Top glow strip */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          {/* Ambient blob */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-primary fill-primary" />
              <span className="font-display text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CineFlix
              </span>
            </div>
            <motion.button
              whileTap={{ scale: 0.85, rotate: 90 }}
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] hover:bg-destructive/10 hover:border-destructive/30 transition-all text-muted-foreground hover:text-destructive"
              aria-label="Close sidebar"
            >
              <X size={16} />
            </motion.button>
          </div>

          {/* User badge */}
          <div className="px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(35_100%_50%)] flex items-center justify-center font-bold text-background font-display text-sm shadow-[0_0_14px_hsl(45_95%_58%/0.4)]">
                  U
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_5px_#34d399]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground font-display tracking-wide">USER12345</p>
                <p className="text-[10px] text-emerald-400">● Active Member</p>
              </div>
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {items.map(({ label, href, icon: Icon, active }, i) => (
              <motion.div key={label} custom={i} variants={itemVariants} initial="hidden" animate="show">
                <Link
                  href={href}
                  onClick={onClose}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 relative overflow-hidden ${
                    active
                      ? "bg-primary/10 border border-primary/25 text-primary shadow-[0_0_16px_hsl(45_95%_58%/0.1)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06]"
                  }`}
                >
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full bg-primary shadow-[0_0_8px_hsl(45_95%_58%)]" />
                  )}
                  <Icon
                    size={17}
                    className={`transition-all duration-200 ${active ? "text-primary drop-shadow-[0_0_6px_hsl(45_95%_58%/0.8)]" : "group-hover:text-primary"}`}
                  />
                  <span className="flex-1">{label}</span>
                  <ChevronRight size={13} className={`transition-all duration-200 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 ${active ? "opacity-40" : ""}`} />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-5 py-4 border-t border-white/[0.06]">
            <p className="text-[10px] text-muted-foreground text-center tracking-widest uppercase">CineFlix v1.0</p>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
