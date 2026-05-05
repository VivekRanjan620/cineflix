"use client";
import { Youtube, DollarSign, Handshake, Video } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground";
import { TiltCard } from "../shared/TiltCard";

const cards = [
  {
    icon: Video,
    title: "Create Quality Content",
    desc: "Build a channel around what you love. Trailers, reviews, reactions — consistency is the key.",
    color: "from-red-500 to-rose-700",
  },
  {
    icon: DollarSign,
    title: "Ad Monetization",
    desc: "Once you qualify for the YouTube Partner Program, every view turns into real ad revenue.",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Handshake,
    title: "Brand Sponsorships",
    desc: "Collaborate with brands and OTT platforms for paid promotions that match your audience.",
    color: "from-sky-400 to-blue-700",
  },
  {
    icon: Youtube,
    title: "Channel Memberships",
    desc: "Offer perks, badges, and exclusive content to loyal fans through memberships and Super Chats.",
    color: "from-fuchsia-500 to-purple-700",
  },
];

export const YouTubeEarning = () => {
  const ref = useReveal();
  return (
    <section
      id="earn-youtube"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-28"
    >
      <SectionBackground variant="aurora" />

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <p className="text-secondary text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · YouTube Creator Income
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Earn From <span className="text-gradient-cinema">YouTube</span> Like a Pro
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">
            From ads to sponsorships, YouTube is one of the strongest creator economies on the
            planet. Here's how serious creators turn views into a career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 perspective-1400">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <TiltCard
                key={c.title}
                className="reveal float-mobile group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover:from-primary/40 hover:to-secondary/40 transition-all duration-500 card-3d"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 backdrop-blur-xl overflow-hidden">
                  <div
                    className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-3xl group-hover:opacity-50 transition-opacity duration-500`}
                  />
                  <div className="relative lift-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg mb-5`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
