"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowUpCircle, RefreshCw, Clock, History } from "lucide-react";

const transactions = [
  { date: "2025-04-24", type: "Deposit", amount: "$112.00", status: "Success" },
  { date: "2025-04-23", type: "Income", amount: "$50.00", status: "Success" },
  { date: "2025-04-22", type: "ROI", amount: "$100.00", status: "Pending" },
  { date: "2025-04-21", type: "Withdrawal", amount: "$30.00", status: "Success" },
  { date: "2025-04-20", type: "Deposit", amount: "$200.00", status: "Failed" },
];

const statusConfig: Record<string, { cls: string; dot: string; glow: string }> = {
  Success: {
    cls: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_8px_#34d39944]",
  },
  Pending: {
    cls: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
    dot: "bg-yellow-400",
    glow: "shadow-[0_0_8px_#facc1544]",
  },
  Failed: {
    cls: "text-red-400 bg-red-400/10 border border-red-400/20",
    dot: "bg-red-400",
    glow: "shadow-[0_0_8px_#f8717144]",
  },
};

const typeIcon: Record<string, React.ReactNode> = {
  Deposit: <ArrowDownCircle size={13} className="text-emerald-400" />,
  Income: <ArrowDownCircle size={13} className="text-primary" />,
  ROI: <RefreshCw size={13} className="text-secondary" />,
  Withdrawal: <ArrowUpCircle size={13} className="text-red-400" />,
};

export function TransactionTable() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]"
      style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.3)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
        <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <History size={12} className="text-primary" />
        </div>
        <h3 className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Transactions
        </h3>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          {transactions.length} records
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[400px]">
          <thead>
            <tr className="border-b border-white/[0.05]">
              {["Date", "Type", "Amount", "Status"].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className={`border-b border-white/[0.04] last:border-0 group transition-all duration-200 hover:bg-white/[0.03] ${
                  i % 2 === 0 ? "bg-white/[0.01]" : ""
                }`}
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5">
                    <Clock size={10} className="text-muted-foreground/50" />
                    <span className="text-[10px] text-muted-foreground font-mono">{tx.date}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5">
                    {typeIcon[tx.type] ?? null}
                    <span className="text-xs font-medium text-foreground">{tx.type}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs font-bold text-primary drop-shadow-[0_0_6px_hsl(45_95%_58%/0.5)]">
                    {tx.amount}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full font-semibold ${statusConfig[tx.status].cls} ${statusConfig[tx.status].glow}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[tx.status].dot}`} />
                    {tx.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
