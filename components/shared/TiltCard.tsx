"use client";
import { CSSProperties, ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
}

/** Card wrapper that applies a 3D tilt on hover (desktop) via useTilt hook. */
export const TiltCard = ({ children, className = "", style, max = 8 }: Props) => {
  const ref = useTilt(max);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
