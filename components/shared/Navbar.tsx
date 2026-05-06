"use client";
import { useEffect, useState } from "react";
import { Film, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Trending", href: "#trending" },
  { label: "Trailers", href: "#trailers" },
  { label: "Categories", href: "#categories" },
  { label: "OTT", href: "#affiliate" },
];

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

// Hash link → <a>  |  Page link → <Link>
function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();

  if (href.startsWith("#")) {
    // Agar already home page pe hai
    if (pathname === "/") {
      return (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }

    // Agar kisi aur page pe hai → home pe bhejo + scroll
    return (
      <Link href={`/${href}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export const Navbar = () => {
  const pathname = usePathname();
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
        {/* Logo */}
       {pathname === "/" ? (
  <a href="#home" className="flex items-center gap-2 group">
    <div className="relative">
      <Film className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
      <div className="absolute inset-0 blur-lg bg-primary/50 -z-10" />
    </div>
    <span className="font-display font-black text-xl tracking-widest text-gradient-cinema">
      CINEFLIX
    </span>
  </a>
) : (
  <Link href="/#home" className="flex items-center gap-2 group">
    <div className="relative">
      <Film className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
      <div className="absolute inset-0 blur-lg bg-primary/50 -z-10" />
    </div>
    <span className="font-display font-black text-xl tracking-widest text-gradient-cinema">
      CINEFLIX
    </span>
  </Link>
)}

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-cinema group-hover:w-full transition-all duration-300" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/5">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/login" className="text-sm font-medium hover:text-primary">
            Login
          </Link>
          <Link href="/register" className="btn-neon !py-2 !px-5 !text-xs">
            Subscribe
          </Link>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-white/5"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden container mt-4 glass-strong rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};