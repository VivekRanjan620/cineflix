"use client";
import { Play } from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground"; 
import { TiltCard } from "../shared/TiltCard";

const trailers = [
  { id: "dQw4w9WgXcQ", title: "Neon Shadows — Official Trailer", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
  { id: "6stlCkUDG_s", title: "Beyond Orion — Teaser", thumb: "https://img.youtube.com/vi/6stlCkUDG_s/maxresdefault.jpg" },
  { id: "TcMBFSGVi1c", title: "Velocity — Final Trailer", thumb: "https://img.youtube.com/vi/TcMBFSGVi1c/maxresdefault.jpg" },
  { id: "zSWdZVtXT7E", title: "Goldforge — Behind the Scenes", thumb: "https://img.youtube.com/vi/zSWdZVtXT7E/maxresdefault.jpg" },
];

export const Trailers = () => {
  const ref = useReveal();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="trailers" ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32">
      <SectionBackground variant="waves" />
      <div className="container">
        <div className="text-center mb-14 reveal">
          <p className="text-secondary text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · Now Playing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
            Latest <span className="text-gradient-cinema">Trailers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Hand-picked premieres in stunning HD. Click play to dive in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 perspective-1400">
          {trailers.map((t, i) => (
            <TiltCard
              key={t.id}
              max={6}
              className="reveal float-mobile group relative aspect-video rounded-2xl overflow-hidden glass cursor-pointer card-3d"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
            <div className="absolute inset-0" onClick={() => setActive(t.id)}>
              {active === t.id ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${t.id}?autoplay=1`}
                  title={t.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={t.thumb}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                  {/* Animated play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                      <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
                      <button className="relative w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-[var(--glow-gold)] transition-transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-lg sm:text-xl font-bold">{t.title}</h3>
                  </div>
                </>
              )}
            </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
