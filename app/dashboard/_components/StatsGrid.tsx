"use client";

import { Users, TrendingUp, BarChart3, Wallet, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Direct Team",
    value: "2",
    icon: Users,
    glow: "hsl(45 95% 58%)",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accent: "from-primary/10 to-transparent",
  },
  {
    label: "Direct Business",
    value: "$5,000.00",
    icon: TrendingUp,
    glow: "hsl(200 100% 55%)",
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    accent: "from-secondary/10 to-transparent",
  },
  {
    label: "Team Business",
    value: "$2,468,455",
    icon: BarChart3,
    glow: "hsl(45 95% 58%)",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accent: "from-primary/10 to-transparent",
  },
  {
    label: "Topup Wallet",
    value: "$112.00",
    icon: Wallet,
    glow: "hsl(200 100% 55%)",
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    accent: "from-secondary/10 to-transparent",
  },
  {
    label: "Income Wallet",
    value: "$314.00",
    icon: DollarSign,
    glow: "hsl(45 95% 58%)",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accent: "from-primary/10 to-transparent",
  },
  {
    label: "ROI Wallet",
    value: "$100.00",
    icon: DollarSign,
    glow: "hsl(200 100% 55%)",
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    accent: "from-secondary/10 to-transparent",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export function StatsGrid() {
  return (
    <div>
      <p className="font-display text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-3">Overview</p>
      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ label, value, icon: Icon, glow, border, iconBg, iconColor, accent }, i) => (
          <motion.div
            key={label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className={`relative rounded-2xl p-4 border ${border} backdrop-blur-xl bg-[hsl(230_30%_8%/0.6)] overflow-hidden cursor-pointer group`}
            style={{
              boxShadow: `0 0 0 0 ${glow}`,
              transition: "box-shadow 0.3s ease",
            }}
            onHoverStart={(e) => {
              (e.target as HTMLElement).closest?.(".group")?.setAttribute(
                "style",
                `box-shadow: 0 0 24px ${glow}22, 0 8px 32px hsl(0 0% 0% / 0.3)`
              );
            }}
            onHoverEnd={(e) => {
              (e.target as HTMLElement).closest?.(".group")?.setAttribute("style", "");
            }}
          >
            {/* Gradient bg on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            {/* Decorative circle */}
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-10 blur-xl"
              style={{ background: glow }}
            />

            <div className={`relative mb-2.5 w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center border border-white/[0.06]`}>
              <Icon size={15} className={iconColor} />
            </div>
            <p className={`relative font-bold text-foreground text-sm leading-tight ${iconColor === "text-primary" ? "drop-shadow-[0_0_6px_hsl(45_95%_58%/0.4)]" : "drop-shadow-[0_0_6px_hsl(200_100%_55%/0.4)]"}`}>
              {value}
            </p>
            <p className="relative text-[10px] text-muted-foreground mt-1 leading-tight">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
