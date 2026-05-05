"use client";
import { Play, Sparkles } from "lucide-react";
const heroBg = "/assets/hero-bg.jpg";
const featured = "/assets/featured-banner.jpg";
import { TiltCard } from "../shared/TiltCard";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroBg}
          alt="Cinematic neon cityscape backdrop"
          width={1920}
          height={1080}
          className="w-full h-full object-cover hero-bg-zoom"
        />
        {/* Dark gradient masks for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Subtle moving gradient overlay */}
      <div className="absolute inset-0 -z-10 hero-animated-bg opacity-70" aria-hidden="true" />

      {/* Floating soft shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="floating-shape shape-1" />
        <span className="floating-shape shape-2" />
        <span className="floating-shape shape-3" />
        <span className="floating-shape shape-4" />
        <span className="floating-shape shape-5" />
      </div>

      <div className="container relative pt-32 pb-20 perspective-1400">
        <div className="max-w-3xl mx-auto flex flex-col items-center relative">
          {/* Soft glow halo behind content */}
          <div className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-[640px] aspect-square rounded-full bg-gradient-cinema opacity-20 blur-[120px] pointer-events-none" aria-hidden="true" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
              New Releases · 2026
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl leading-[1.05] mb-6 animate-fade-in-up">
            <span className="block">Where Every</span>
            <span className="hero-text-flow inline-block px-1">Trailer</span>
            <span className="block">
              Comes <span className="hero-text-flow hero-text-flow--gold">Alive.</span>
            </span>
          </h1>

          <p
            className="text-base sm:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Stream blockbuster trailers, discover hidden gems, and unlock exclusive OTT
            subscriptions — all in one cinematic universe.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#trailers" className="btn-neon group">
              <Play className="w-4 h-4 fill-current" />
              Watch Trailer
            </a>
            <a href="#trending" className="btn-ghost-neon">
              Explore Movies
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg w-full animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { n: "10K+", l: "Trailers" },
              { n: "500+", l: "Premieres" },
              { n: "50+", l: "OTT Deals" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl sm:text-4xl font-black text-gradient-gold">
                  {s.n}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* 3D tilted floating image card */}
          <TiltCard
            max={12}
            className="mt-16 sm:mt-20 w-full max-w-2xl rounded-3xl overflow-hidden card-3d border border-white/10 shadow-[0_30px_80px_-20px_hsl(45_95%_58%/0.35)] animate-fade-in-up"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={featured}
                alt="Featured cinematic banner"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between lift-1">
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-semibold">Featured</div>
                  <div className="font-display text-base sm:text-xl font-bold">Tonight's Premiere</div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-[var(--glow-gold)]">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
