"use client";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

export const Newsletter = () => {
  const ref = useReveal();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're in! Cinematic updates incoming.");
    setEmail("");
  };

  return (
    <section id="newsletter" ref={ref as React.RefObject<HTMLElement>} className="relative py-24 sm:py-32">
      <div className="container">
        <div className="reveal relative max-w-4xl mx-auto rounded-3xl p-10 sm:p-16 glass-strong border-gradient overflow-hidden text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-cinema opacity-20 blur-[120px] rounded-full" />

          <div className="relative">
            <div className="inline-flex w-14 h-14 rounded-full bg-gradient-cinema items-center justify-center mb-6 shadow-[var(--glow-gold)] animate-glow-pulse">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black mb-4">
              Never Miss a <span className="text-gradient-cinema">Premiere</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Weekly trailers, exclusive OTT discounts, and early access to red-carpet drops —
              straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="relative p-1 rounded-full bg-gradient-cinema animate-glow-pulse">
                <div className="flex items-center bg-background rounded-full overflow-hidden">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-6 py-3 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="m-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold text-sm shadow-[var(--glow-gold)] hover:scale-105 transition-transform"
                  >
                    <Send className="w-4 h-4" /> Join
                  </button>
                </div>
              </div>
            </form>

            <p className="text-xs text-muted-foreground mt-5">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
