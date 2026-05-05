"use client";
import { useEffect, useState } from "react";
import { Film, Menu, Search, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Trending", href: "#trending" },
  { label: "Trailers", href: "#trailers" },
  { label: "Categories", href: "#categories" },
  { label: "OTT", href: "#affiliate" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl bg-background/70 border-b border-white/5" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Film className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 blur-lg bg-primary/50 -z-10" />
          </div>
          <span className="font-display font-black text-xl tracking-widest text-gradient-cinema">
            CINEFLIX
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-cinema group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-white/5">
                <Search className="w-5 h-5" />
             </button>

              {/* LOGIN */}
              <Link href="/login" className="text-sm font-medium hover:text-primary">
               Login
              </Link>

              {/* REGISTER */}
              <Link href="/register" className="btn-neon !py-2 !px-5 !text-xs">
               Subscribe
              </Link>
           </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden container mt-4 glass-strong rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-1 text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
