"use client";
import { Play, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SectionBackground } from "../shared/SectionBackground";
import { TiltCard } from "../shared/TiltCard";
const m1 = "/assets/movie-1.jpg";
const m2 = "/assets/movie-2.jpg";
const m3 = "/assets/movie-3.jpg";
const m4 = "/assets/movie-4.jpg";
const m5 = "/assets/movie-5.jpg";
const m6 = "/assets/movie-6.jpg";

const movies = [
  { img: m1, title: "Neon Shadows", genre: "Action · Thriller", rating: 8.9 },
  { img: m2, title: "The Hollow Pines", genre: "Horror · Mystery", rating: 7.8 },
  { img: m3, title: "Beyond Orion", genre: "Sci-Fi · Drama", rating: 9.2 },
  { img: m4, title: "Velocity", genre: "Action · Heist", rating: 8.4 },
  { img: m5, title: "Goldforge", genre: "Fantasy · Adventure", rating: 9.0 },
  { img: m6, title: "Endless Tide", genre: "Romance · Drama", rating: 7.6 },
];

export const Trending = () => {
  const ref = useReveal();
  return (
    <section id="trending" ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32">
      <SectionBackground variant="grid" />
      <div className="container">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-3">
              · Top Picks
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              Trending <span className="text-gradient-gold">Now</span>
            </h2>
          </div>
          <a href="#trailers" className="hidden sm:inline-flex text-sm text-secondary hover:underline">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 perspective-1400">
          {movies.map((m, i) => (
            <TiltCard
              key={m.title}
              max={10}
              className="reveal float-mobile group relative rounded-2xl overflow-hidden glass cursor-pointer card-3d"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.title} movie poster`}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/40 via-transparent to-secondary/30" />
              </div>

              {/* Rating */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass-strong">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span className="text-xs font-bold">{m.rating}</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                  {m.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{m.genre}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm shadow-[var(--glow-gold)] scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 fill-current" /> Watch Trailer
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
