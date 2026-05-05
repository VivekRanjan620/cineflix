"use client";

import { useState } from "react";
import { TableProperties, IndianRupee, TrendingUp, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IncomeType   = "affiliate" | "youtube" | "trailer" | "referral";
type IncomeStatus = "paid" | "pending" | "failed";

interface IncomeEntry {
  id: string;
  type: IncomeType;
  title: string;
  amount: number;
  date: string;
  status: IncomeStatus;
}

const MOCK: IncomeEntry[] = [
  { id: "1", type: "affiliate",  title: "Netflix 3-month plan",       amount: 450,  date: "2025-07-15", status: "paid"    },
  { id: "2", type: "youtube",    title: "Reel — Kalki 2898AD",         amount: 120,  date: "2025-07-14", status: "paid"    },
  { id: "3", type: "trailer",    title: "Pushpa 2 trailer watch",      amount: 80,   date: "2025-07-13", status: "paid"    },
  { id: "4", type: "referral",   title: "Priya joined via link",       amount: 200,  date: "2025-07-12", status: "paid"    },
  { id: "5", type: "affiliate",  title: "Prime Video annual",          amount: 750,  date: "2025-07-10", status: "pending" },
  { id: "6", type: "youtube",    title: "Reel — Stree 2",              amount: 95,   date: "2025-07-09", status: "paid"    },
  { id: "7", type: "trailer",    title: "Jawan trailer watch",         amount: 60,   date: "2025-07-08", status: "failed"  },
  { id: "8", type: "affiliate",  title: "SonyLIV 6-month",            amount: 380,  date: "2025-07-07", status: "pending" },
  { id: "9", type: "referral",   title: "Amit joined via link",        amount: 200,  date: "2025-07-06", status: "paid"    },
  { id: "10",type: "youtube",    title: "Reel — Devara",               amount: 85,   date: "2025-07-05", status: "paid"    },
];

const INCOME_LABELS: Record<IncomeType, string> = {
  affiliate: "Affiliate",
  youtube:   "YouTube",
  trailer:   "Trailer",
  referral:  "Referral",
};

const TYPE_STYLE: Record<IncomeType, string> = {
  affiliate: "bg-primary/10   text-primary   border-primary/20",
  youtube:   "bg-red-500/10   text-red-400   border-red-500/20",
  trailer:   "bg-secondary/10 text-secondary  border-secondary/20",
  referral:  "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const STATUS_STYLE: Record<IncomeStatus, string> = {
  paid:    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  pending: "bg-amber-500/10  text-amber-400  border-amber-500/20",
  failed:  "bg-red-500/10    text-red-400    border-red-500/20",
};

export default function IncomePage() {
  const [filter, setFilter] = useState<IncomeType | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = MOCK
    .filter((e) => filter === "all" || e.type === filter)
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()));

  const totalPaid    = MOCK.filter((e) => e.status === "paid").reduce((s, e) => s + e.amount, 0);
  const totalPending = MOCK.filter((e) => e.status === "pending").reduce((s, e) => s + e.amount, 0);

  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans">

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28">

        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>

        {/* Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <TableProperties className="text-primary" size={18} />
          </div>
          <div>
            <p className="font-display text-sm text-primary tracking-wide">All Income</p>
            <p className="text-xs text-muted-foreground">Complete earnings history</p>
          </div>
        </div>

        {/* Summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-3 mb-5"
        >
          {[
            { label: "Total Paid",    value: `₹${totalPaid.toLocaleString()}`,    icon: IndianRupee, color: "text-primary" },
            { label: "Pending",       value: `₹${totalPending.toLocaleString()}`, icon: IndianRupee, color: "text-amber-400" },
            { label: "Total Entries", value: `${MOCK.length}`,                    icon: TrendingUp,  color: "text-secondary" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/[0.07] bg-[hsl(230_30%_8%/0.7)] p-4">
              <s.icon className={`${s.color} mb-2`} size={16} />
              <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Filter + Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
          className="flex flex-col gap-3 mb-4"
        >
          <div className="flex gap-2 flex-wrap">
            {(["all", "affiliate", "youtube", "trailer", "referral"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                  filter === t
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_10px_hsl(45_95%_58%/0.3)]"
                    : "border-white/[0.08] text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {t === "all" ? "All" : INCOME_LABELS[t]}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search income..."
              className="w-full pl-8 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/[0.07] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40"
            />
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/[0.07] bg-[hsl(230_30%_8%/0.7)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  {["Date", "Description", "Type", "Amount", "Status"].map((h, i) => (
                    <th
                      key={h}
                      className={cn(
                        "px-4 py-3 text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
                        i === 3 ? "text-right" : "text-left"
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-muted-foreground text-sm">
                      No entries found
                    </td>
                  </tr>
                ) : (
                  filtered.map((entry, i) => (
                    <tr
                      key={entry.id}
                      className={cn(
                        "hover:bg-white/[0.02] transition-colors",
                        i < filtered.length - 1 && "border-b border-white/[0.05]"
                      )}
                    >
                      <td className="px-4 py-3.5 text-muted-foreground text-xs whitespace-nowrap">
                        {new Date(entry.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-4 py-3.5 text-foreground text-xs">{entry.title}</td>
                      <td className="px-4 py-3.5">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-medium border", TYPE_STYLE[entry.type])}>
                          {INCOME_LABELS[entry.type]}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-right font-semibold text-foreground text-xs">
                        ₹{entry.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-medium border capitalize", STATUS_STYLE[entry.status])}>
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}