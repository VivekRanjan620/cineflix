"use client";

import { useState } from "react";
import { Home, Users, Wallet, User } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", icon: Home },
  { label: "Team", icon: Users },
  { label: "Wallet", icon: Wallet },
  { label: "Profile", icon: User },
];

export function BottomNav() {
  const [active, setActive] = useState(0);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around px-2 py-2 border-t border-white/[0.06] backdrop-blur-2xl bg-[hsl(230_35%_4%/0.92)]"
      style={{ boxShadow: "0 -1px 0 hsl(45 95% 58% / 0.06), 0 -8px 32px hsl(0 0% 0% / 0.4)" }}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {tabs.map(({ label, icon: Icon }, i) => {
        const isActive = active === i;
        return (
          <motion.button
            key={label}
            onClick={() => setActive(i)}
            whileTap={{ scale: 0.82 }}
            className="relative flex flex-col items-center gap-1 px-5 py-1.5 rounded-xl transition-colors duration-200"
          >
            {/* Active pill background */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/25"
                style={{ boxShadow: "0 0 16px hsl(45 95% 58% / 0.15)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            <motion.div
              animate={isActive ? { scale: 1.15 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Icon
                size={20}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-primary drop-shadow-[0_0_8px_hsl(45_95%_58%/0.9)]"
                    : "text-muted-foreground"
                }`}
              />
            </motion.div>
            <span
              className={`text-[10px] font-medium transition-colors duration-200 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
