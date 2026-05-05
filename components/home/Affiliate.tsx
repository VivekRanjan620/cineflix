"use client";
import { ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground";
import { TiltCard } from "../shared/TiltCard";

const platforms = [
  { name: "Netflix", tag: "Originals & Blockbusters", price: "$15.49/mo", color: "from-red-500 to-red-700", url: "https://www.netflix.com" },
  { name: "Prime Video", tag: "Movies + Free Shipping", price: "$8.99/mo", color: "from-sky-400 to-blue-700", url: "https://www.primevideo.com" },
  { name: "Disney+", tag: "Marvel · Star Wars · Pixar", price: "$10.99/mo", color: "from-indigo-500 to-purple-700", url: "https://www.disneyplus.com" },
  { name: "HBO Max", tag: "Premium Cinematic Series", price: "$15.99/mo", color: "from-fuchsia-500 to-purple-800", url: "https://www.max.com" },
];

export const Affiliate = () => {
  const ref = useReveal();
  return (
    <section id="affiliate" ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32">
      <SectionBackground variant="aurora" />
      <div className="container">
        <div className="text-center mb-14 reveal">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · Stream Smarter
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
            Top <span className="text-gradient-gold">OTT Platforms</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Subscribe directly through us and unlock exclusive cinematic perks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1400">
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="reveal float-mobile group relative p-6 rounded-2xl glass-strong border-gradient overflow-hidden card-3d lift-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-3xl group-hover:opacity-60 transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center font-display font-black text-lg shadow-lg`}>
                  {p.name[0]}
                </div>
                <h3 className="font-display text-2xl font-bold mt-5">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">From</div>
                    <div className="font-display text-xl font-bold text-gradient-cinema">{p.price}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Subscribe <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
