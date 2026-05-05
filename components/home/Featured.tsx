"use client";
import { Play, Star, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
const banner = "/assets/featured-banner.jpg";

export const Featured = () => {
  const ref = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32">
      <div className="container">
        <div className="reveal relative rounded-3xl overflow-hidden glass-strong">
          <div className="absolute inset-0">
            <img
              src={banner}
              alt="Featured movie banner"
              loading="lazy"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-secondary/30 blur-[100px]" />
          </div>

          <div className="relative p-8 sm:p-14 lg:p-20 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Featured</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-5">
              Galaxy of <br /> <span className="text-gradient-gold">Echoes</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-primary text-primary" /> 9.4 / 10</span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-secondary" /> 2h 18m</span>
              <span className="text-muted-foreground">·</span>
              <span className="px-2 py-0.5 rounded border border-white/10 text-xs">Sci-Fi</span>
              <span className="px-2 py-0.5 rounded border border-white/10 text-xs">Action</span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl">
              When two galaxies collide, a forgotten warrior must rise to forge the only weapon
              powerful enough to silence the storm — a blade of pure light.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#trailers" className="btn-neon"><Play className="w-4 h-4 fill-current" /> Watch Now</a>
              <a href="#trending" className="btn-ghost-neon">+ My List</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
