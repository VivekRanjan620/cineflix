"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", Investment: 500, Income: 80 },
  { month: "Feb", Investment: 800, Income: 150 },
  { month: "Mar", Investment: 1200, Income: 220 },
  { month: "Apr", Investment: 1800, Income: 314 },
  { month: "May", Investment: 2400, Income: 410 },
  { month: "Jun", Investment: 3000, Income: 520 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-xl px-3 py-2.5 text-xs border border-white/10 backdrop-blur-xl"
      style={{
        background: "hsl(230 30% 8% / 0.95)",
        boxShadow: "0 0 20px hsl(45 95% 58% / 0.15), 0 8px 32px hsl(0 0% 0% / 0.5)",
      }}
    >
      <p className="text-muted-foreground mb-1.5 font-display text-[10px] uppercase tracking-wider">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-0.5">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
          <span className="text-muted-foreground">{p.dataKey}:</span>
          <span className="font-bold text-foreground">${p.value}</span>
        </div>
      ))}
    </div>
  );
};

const CustomLegend = ({ payload }: any) => (
  <div className="flex items-center justify-center gap-4 mt-2">
    {payload?.map((p: any) => (
      <div key={p.value} className="flex items-center gap-1.5">
        <span className="w-3 h-0.5 rounded-full inline-block" style={{ background: p.color, boxShadow: `0 0 4px ${p.color}` }} />
        <span className="text-[10px] text-muted-foreground">{p.value}</span>
      </div>
    ))}
  </div>
);

export function IncomeChart() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]"
      style={{ boxShadow: "0 0 40px hsl(200 100% 55% / 0.05), 0 20px 60px hsl(0 0% 0% / 0.3)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="absolute -top-8 right-0 w-40 h-40 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
            <TrendingUp size={13} className="text-secondary" />
          </div>
          <h3 className="font-display text-[10px] uppercase tracking-[0.2em] bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Investment vs Income
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="gradInvestment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(45 95% 58%)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="hsl(45 95% 58%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(200 100% 55%)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="hsl(200 100% 55%)" stopOpacity={0} />
              </linearGradient>
              <filter id="glowGold">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="glowBlue">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 30% 18% / 0.5)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(45 10% 55%)", fontSize: 10 }}
              axisLine={false} tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(45 10% 55%)", fontSize: 10 }}
              axisLine={false} tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Area
              type="monotone" dataKey="Investment"
              stroke="hsl(45 95% 58%)" strokeWidth={2.5}
              fill="url(#gradInvestment)"
              filter="url(#glowGold)"
              dot={false} activeDot={{ r: 5, fill: "hsl(45 95% 58%)", stroke: "hsl(230 30% 8%)", strokeWidth: 2 }}
            />
            <Area
              type="monotone" dataKey="Income"
              stroke="hsl(200 100% 55%)" strokeWidth={2.5}
              fill="url(#gradIncome)"
              filter="url(#glowBlue)"
              dot={false} activeDot={{ r: 5, fill: "hsl(200 100% 55%)", stroke: "hsl(230 30% 8%)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
