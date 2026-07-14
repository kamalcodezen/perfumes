import React from "react";
import { Sparkles, Compass } from "lucide-react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-perf-border/50 bg-gradient-to-b from-perf-bg via-perf-card/30 to-perf-bg py-24 text-perf-text-main">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-perf-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center space-y-4">
        <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-perf-gold bg-perf-gold/10 border border-perf-gold/30 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles size={13} className="animate-pulse" /> Haute Parfumerie
          Atelier
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-perf-text-main tracking-tight leading-tight">
          Crafting Memory & Scent
        </h1>

        <p className="mx-auto max-w-xl text-xs sm:text-sm text-perf-text-muted leading-relaxed font-light">
          Whether seeking a signature olfactory identity, custom blend inquiry,
          or boutique support—our Master Perfumers and Concierge are at your
          service.
        </p>

        <div className="pt-2 flex justify-center items-center gap-6 text-[11px] text-perf-text-muted/80 font-mono">
          <span className="flex items-center gap-1.5">
            <Compass size={14} className="text-perf-gold" /> Paris
          </span>
          <span>•</span>
          <span>New York</span>
          <span>•</span>
          <span>Dubai</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
