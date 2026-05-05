"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardHeader } from "./DashboardHeader";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { StatsGrid } from "./StatsGrid";
import { IncomeCards } from "./IncomeCards";
import { ReferralSection } from "./ReferralSection";
import { ShieldCheck, Star } from "lucide-react";

// ── Lazy load heavy / below-fold components ──
const IncomeChart      = dynamic(() => import("./IncomeChart").then(m => ({ default: m.IncomeChart })), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});
const TransactionTable = dynamic(() => import("./TransactionTable").then(m => ({ default: m.TransactionTable })), {
  ssr: false,
  loading: () => <BlockSkeleton h="h-48" />,
});
const QuickActionForm  = dynamic(() => import("./QuickActionForm").then(m => ({ default: m.QuickActionForm })), {
  ssr: false,
  loading: () => <BlockSkeleton h="h-64" />,
});

// ── Skeleton placeholders ──
function ChartSkeleton() {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[hsl(230_30%_8%/0.7)] p-5 h-[268px] animate-pulse">
      <div className="h-3 w-40 rounded bg-white/5 mb-4" />
      <div className="h-[200px] rounded-xl bg-white/[0.03]" />
    </div>
  );
}
function BlockSkeleton({ h }: { h: string }) {
  return (
    <div className={`rounded-2xl border border-white/[0.07] bg-[hsl(230_30%_8%/0.7)] ${h} animate-pulse`} />
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function DashboardClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans overflow-x-hidden">

      {/* ── Ambient background blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px] animate-[blob-move_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px] animate-[blob-move_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[hsl(280_80%_60%/0.05)] blur-[90px] animate-[blob-move_26s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(45 95% 58%) 1px,transparent 1px),linear-gradient(90deg,hsl(200 100% 55%) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 pt-16 pb-28 px-4 max-w-2xl mx-auto space-y-5"
      >
        {/* ── Section 1 — User Info Card ── */}
        <motion.div variants={fadeUp}>
          <div className="relative rounded-2xl overflow-hidden border border-primary/25 shadow-[0_0_40px_hsl(45_95%_58%/0.08)] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-[hsl(35_100%_50%)] flex items-center justify-center text-sm font-bold text-background font-display shadow-[0_0_16px_hsl(45_95%_58%/0.5)]">
                    U
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_6px_#34d399]" />
                </div>
                <div>
                  <p className="font-display text-sm text-primary tracking-wide">USER12345</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ShieldCheck size={10} className="text-emerald-400" /> Active Member
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 text-primary border border-primary/30 font-semibold shadow-[0_0_10px_hsl(45_95%_58%/0.2)]">
                  <Star size={10} className="fill-primary" /> Level 1
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-sm">
                {[
                  ["Sign Up On", "2025-04-24 04:51:08"],
                  ["Activation On", "2025-04-24 04:50:51"],
                  ["My Package", "$0"],
                  ["Earning Limit", "314.00 / 0"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="relative rounded-xl p-3 bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-muted-foreground text-[10px] mb-1 uppercase tracking-wider">{label}</p>
                    <p className="font-semibold text-foreground text-xs leading-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Section 2 — Stats Grid ── */}
        <motion.div variants={fadeUp}><StatsGrid /></motion.div>

        {/* ── Section 3 — Binary Income ── */}
        <motion.div variants={fadeUp}>
          <div className="relative rounded-2xl overflow-hidden border border-secondary/25 backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)] shadow-[0_0_40px_hsl(200_100%_55%/0.06)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70" />
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
            <div className="p-5">
              <h3 className="font-display text-xs uppercase tracking-widest mb-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Binary Income
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3 bg-white/[0.03] border border-primary/15 hover:border-primary/30 hover:shadow-[0_0_16px_hsl(45_95%_58%/0.15)] transition-all duration-300">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">First Leg 40%</p>
                  <p className="font-bold text-primary text-sm drop-shadow-[0_0_8px_hsl(45_95%_58%/0.6)]">2,468,455.88</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-mono">CS772096</p>
                </div>
                <div className="rounded-xl p-3 bg-white/[0.03] border border-secondary/15 hover:border-secondary/30 hover:shadow-[0_0_16px_hsl(200_100%_55%/0.15)] transition-all duration-300">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">Rest Leg 60%</p>
                  <p className="font-bold text-secondary text-sm drop-shadow-[0_0_8px_hsl(200_100%_55%/0.6)]">0.00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Section 4 — Referral ── */}
        <motion.div variants={fadeUp}><ReferralSection /></motion.div>

        {/* ── Section 5 — Income Types ── */}
        <motion.div variants={fadeUp}><IncomeCards /></motion.div>

        {/* ── Section 6 — Chart (lazy) ── */}
        <motion.div variants={fadeUp}><IncomeChart /></motion.div>

        {/* ── Section 7 — Transactions (lazy) ── */}
        <motion.div variants={fadeUp}><TransactionTable /></motion.div>

        {/* ── Section 8 — Quick Action Form (lazy) ── */}
        <motion.div variants={fadeUp}><QuickActionForm /></motion.div>
      </motion.main>

      <BottomNav />
    </div>
  );
}
