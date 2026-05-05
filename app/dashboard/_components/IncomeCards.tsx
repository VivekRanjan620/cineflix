"use client";

import { TrendingUp, Layers, RotateCcw, Gift, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });

const incomes = [
  {
    label: "Direct Income",   amount: 0,
    icon: TrendingUp,         color: "text-yellow-400", amountColor: "text-yellow-400",
    border: "border-yellow-400/20", bg: "bg-yellow-400/8", iconBg: "bg-yellow-400/10",
    shadow: "hover:shadow-[0_0_24px_hsl(45_95%_58%/0.3)]",
  },
  {
    label: "Level Income",    amount: 0,
    icon: Layers,             color: "text-sky-400",    amountColor: "text-sky-400",
    border: "border-sky-400/20",    bg: "bg-sky-400/8",    iconBg: "bg-sky-400/10",
    shadow: "hover:shadow-[0_0_24px_hsl(200_100%_55%/0.3)]",
  },
  {
    label: "ROI Income",      amount: 100,
    icon: RotateCcw,          color: "text-purple-400", amountColor: "text-purple-400",
    border: "border-purple-400/20", bg: "bg-purple-400/8", iconBg: "bg-purple-400/10",
    shadow: "hover:shadow-[0_0_24px_hsl(280_80%_60%/0.3)]",
  },
  {
    label: "Reward Income",   amount: 0,
    icon: Gift,               color: "text-cyan-400",   amountColor: "text-cyan-400",
    border: "border-cyan-400/20",   bg: "bg-cyan-400/8",   iconBg: "bg-cyan-400/10",
    shadow: "hover:shadow-[0_0_24px_hsl(185_100%_55%/0.3)]",
  },
  {
    label: "Salary Income",   amount: 314,
    icon: Briefcase,          color: "text-orange-400", amountColor: "text-orange-400",
    border: "border-orange-400/20", bg: "bg-orange-400/8", iconBg: "bg-orange-400/10",
    shadow: "hover:shadow-[0_0_24px_hsl(25_100%_60%/0.3)]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  show: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function IncomeCards() {
  return (
    <div>
      <p className="font-display text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-3">
        Income Types
      </p>
      <div className="grid grid-cols-2 gap-3">
        {incomes.map(({ label, amount, amountColor, icon: Icon, color, border, bg, iconBg, shadow }, i) => (
          <motion.button
            key={label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`dash-card-scan relative rounded-2xl p-4 border ${border} ${bg} ${shadow} backdrop-blur-xl bg-[hsl(230_30%_8%/0.6)] flex items-center gap-3 text-left overflow-hidden group transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`absolute -bottom-3 -right-3 w-12 h-12 rounded-full ${iconBg} blur-xl opacity-60`} />

            <div className={`relative p-2.5 rounded-xl ${iconBg} border border-white/[0.06] group-hover:scale-110 transition-transform duration-200 shrink-0`}>
              <Icon size={15} className={color} />
            </div>

            <div className="relative flex flex-col gap-0.5 min-w-0">
              <span className="text-xs font-semibold text-foreground leading-tight truncate">{label}</span>
              <span className={`text-[11px] font-bold font-mono ${amountColor} leading-none`}>
                {fmt(amount)}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
