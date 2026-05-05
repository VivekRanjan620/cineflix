"use client";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Wait for full page load (all assets), then hide after short delay
    const hide = () => setTimeout(() => setHidden(true), 600);

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    // Fallback: max 8 seconds no matter what
    const fallback = setTimeout(() => setHidden(true), 8000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className={`loader-wrap ${hidden ? "hidden-loader" : ""}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="loader-ring" />
        <div className="font-display text-xl tracking-[0.4em] text-gradient-cinema">
          CINEFLIX
        </div>
      </div>
    </div>
  );
};
