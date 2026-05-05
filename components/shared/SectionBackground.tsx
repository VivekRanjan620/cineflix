"use client";
type Variant = "mesh" | "aurora" | "waves" | "grid" | "spotlight";

interface Props {
  variant?: Variant;
  className?: string;
}

/**
 * Reusable animated background layer for sections.
 * Pure CSS, GPU-friendly, mobile-tuned via index.css.
 */
export const SectionBackground = ({ variant = "mesh", className = "" }: Props) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className={`section-bg section-bg--${variant}`}>
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
      </div>
    </div>
  );
};
