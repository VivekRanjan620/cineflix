"use client";
import { PlayCircle, ShieldCheck, Coins, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground";
import { TiltCard } from "../shared/TiltCard";

const steps = [
  {
    icon: PlayCircle,
    title: "Watch Trailers",
    desc: "Stream the latest movie trailers and short promotional videos curated for you.",
  },
  {
    icon: Coins,
    title: "Earn Reward Points",
    desc: "Every completed trailer credits points to your wallet — redeemable for real rewards.",
  },
  {
    icon: Clock,
    title: "Daily Bonuses",
    desc: "Log in daily and unlock streak bonuses, surprise drops, and limited-time multipliers.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Verified",
    desc: "100% transparent tracking, secure payouts, and no spam. Your time, fairly rewarded.",
  },
];

export const TrailerEarning = () => {
  const ref = useReveal();
  return (
    <section
      id="earn-trailers"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <SectionBackground variant="spotlight" />

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · Watch & Earn
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Get Paid To <span className="text-gradient-gold">Watch Trailers</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">
            Enjoy the magic of cinema and get rewarded for it. Watch trailers, complete simple
            tasks, and turn your screen time into real earnings — safely and transparently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 perspective-1400">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <TiltCard
                key={s.title}
                className="reveal float-mobile group relative text-center p-6 rounded-2xl glass-strong border border-white/5 hover:border-primary/40 transition-all duration-500 card-3d"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-16 h-16 mx-auto mb-5 lift-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-cinema opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-cinema flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 lift-1">
                  Step {i + 1}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2 lift-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </TiltCard>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center reveal">
          <a href="#newsletter" className="btn-neon">
            Start Earning Now
          </a>
        </div>
      </div>
    </section>
  );
};
