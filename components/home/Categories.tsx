"use client";
import { Flame, Ghost, Laugh, Rocket, Heart, Swords, Skull, Wand2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const cats = [
  { name: "Action", icon: Flame, glow: "from-orange-400 to-red-500" },
  { name: "Horror", icon: Ghost, glow: "from-slate-400 to-slate-700" },
  { name: "Comedy", icon: Laugh, glow: "from-yellow-300 to-amber-500" },
  { name: "Sci-Fi", icon: Rocket, glow: "from-sky-400 to-indigo-600" },
  { name: "Romance", icon: Heart, glow: "from-pink-400 to-rose-600" },
  { name: "Adventure", icon: Swords, glow: "from-emerald-400 to-teal-600" },
  { name: "Thriller", icon: Skull, glow: "from-purple-400 to-fuchsia-700" },
  { name: "Fantasy", icon: Wand2, glow: "from-violet-400 to-blue-600" },
];

export const Categories = () => {
  const ref = useReveal();
  return (
    <section id="categories" ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container">
        <div className="text-center mb-14 reveal">
          <p className="text-secondary text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            · Explore
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
            Browse by <span className="text-gradient-cinema">Genre</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.name}
                className="reveal group relative p-6 sm:p-8 rounded-2xl glass overflow-hidden transition-all hover:-translate-y-2 hover:border-primary/40"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.glow} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-display font-bold text-lg">{c.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
