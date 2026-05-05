"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight 3D tilt on hover (desktop / fine-pointer only).
 * Skips touch + reduced-motion automatically.
 */
export const useTilt = (max = 10) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        el.style.setProperty("--tz", `8px`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--tz", `0px`);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
};
