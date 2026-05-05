"use client";
import { Film, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const cols = [
  { title: "Explore", links: ["Trending", "New Releases", "Top Rated", "Categories"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookies", "Affiliate Disclosure"] },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 mb-14">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <Film className="w-7 h-7 text-primary" />
              <span className="font-display font-black text-xl tracking-widest text-gradient-cinema">
                CINEFLIX
              </span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              The ultimate cinematic universe for trailers, premieres and OTT subscriptions —
              curated by movie lovers, for movie lovers.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--glow-gold)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-5 text-primary">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                    >
                      {l}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CineFlix. All trailers © respective studios.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with <span className="text-primary">★</span> for cinema lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};
