"use client";
import { TrendingUp, Wallet, Share2, BarChart3 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground";
import { TiltCard } from "../shared/TiltCard";

const points = [
  {
    icon: Share2,
    title: "Promote Premium Products",
    desc: "Share curated movie subscriptions and OTT deals with your audience using your unique referral link.",
  },
  {
    icon: Wallet,
    title: "Earn Real Commissions",
    desc: "Get paid for every successful sign-up. Transparent tracking, weekly payouts, no hidden fees.",
  },
  {
    icon: TrendingUp,
    title: "Build Passive Income",
    desc: "Recurring commissions on renewals mean your effort today keeps paying you tomorrow.",
  },
  {
    icon: BarChart3,
    title: "Track Performance Live",
    desc: "Real-time dashboards for clicks, conversions, and revenue — optimize what works best.",
  },
];

export const AffiliateEarning = () => {
  const ref = useReveal();
  return (
    <section
      id="earn-affiliate"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-28"
    >
      <SectionBackground variant="mesh" />

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · Affiliate Marketing
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Earn With <span className="text-gradient-gold">Affiliate</span> Marketing
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">
            Turn your audience into a steady income stream. Promote products you love, earn
            commissions, and unlock true passive income — at your own pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 perspective-1400">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <TiltCard
                key={p.title}
                className="reveal float-mobile group relative p-6 rounded-2xl glass-strong border-gradient overflow-hidden card-3d"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative lift-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-lg mb-5">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
