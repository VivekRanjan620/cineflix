"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Zap,
  LayoutDashboard,
  Users,
  IndianRupee,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// ── Nav items ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { href: "/admin/dashboard",          label: "Overview",  icon: LayoutDashboard },
  { href: "/admin/dashboard/users",    label: "All Users", icon: Users           },
  { href: "/admin/dashboard/payouts",  label: "Payouts",   icon: IndianRupee     },
  { href: "/admin/dashboard/settings", label: "Settings",  icon: Settings        },
];

// ── Shared sidebar content ────────────────────────────────────────────────
function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full">

      {/* Top glow strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* Brand */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-white/[0.06]">
        <Zap size={14} className="text-primary fill-primary" />
        <span className="font-display text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          CineFlix
        </span>
        <span className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium tracking-wider uppercase">
          Admin
        </span>
        {/* Close button — only on mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 p-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] hover:bg-destructive/10 hover:border-destructive/30 text-muted-foreground hover:text-destructive transition-all md:hidden"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Admin badge */}
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-[hsl(180_100%_45%)] flex items-center justify-center shadow-[0_0_14px_hsl(200_100%_55%/0.4)]">
              <ShieldCheck size={18} className="text-background" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_5px_#34d399]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground font-display tracking-wide">Admin</p>
            <p className="text-[10px] text-secondary">● Administrator</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 relative overflow-hidden ${
                active
                  ? "bg-secondary/10 border border-secondary/25 text-secondary shadow-[0_0_16px_hsl(200_100%_55%/0.1)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06]"
              }`}
            >
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full bg-secondary shadow-[0_0_8px_hsl(200_100%_55%)]" />
              )}
              <Icon
                size={17}
                className={`transition-all duration-200 ${
                  active
                    ? "text-secondary drop-shadow-[0_0_6px_hsl(200_100%_55%/0.8)]"
                    : "group-hover:text-secondary"
                }`}
              />
              <span className="flex-1">{label}</span>
              <ChevronRight
                size={13}
                className={`transition-all duration-200 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 ${active ? "opacity-40" : ""}`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/[0.06]">
        <button
          onClick={() => { window.location.href = "/login"; }}
          className="group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 border border-transparent hover:border-destructive/20 transition-all duration-200"
        >
          <LogOut size={17} className="group-hover:text-destructive transition-colors" />
          <span className="flex-1 text-left">Logout</span>
        </button>
      </div>

      <div className="px-5 py-3 border-t border-white/[0.04]">
        <p className="text-[10px] text-muted-foreground text-center tracking-widest uppercase">CineFlix v1.0</p>
      </div>

    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarStyle = {
    boxShadow: "4px 0 40px hsl(0 0% 0% / 0.4), inset -1px 0 0 hsl(200 100% 55% / 0.06)",
  };

  return (
    <>
      {/* ── Mobile hamburger button ───────────────────────────────────── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl border border-white/[0.08] bg-[hsl(230_35%_8%/0.9)] backdrop-blur-xl text-muted-foreground hover:text-foreground hover:border-secondary/30 transition-all shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* ── Mobile: backdrop + drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 left-0 h-full w-72 z-50 border-r border-white/[0.07] backdrop-blur-2xl bg-[hsl(230_35%_4%/0.98)] overflow-hidden"
              style={sidebarStyle}
            >
              <SidebarContent
                pathname={pathname}
                onClose={() => setMobileOpen(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Desktop: static sidebar ───────────────────────────────────── */}
      <aside
        className="hidden md:flex flex-col w-64 min-h-screen border-r border-white/[0.07] backdrop-blur-2xl bg-[hsl(230_35%_4%/0.95)] shrink-0 relative overflow-hidden"
        style={sidebarStyle}
      >
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
}