import React from "react";
import { Sparkles, Clock, MapPin, ShieldCheck } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <section className="bg-perf-bg py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Private Fragrance Consultation */}
          <div className="rounded-lg border border-perf-border/70 bg-perf-card/40 p-6 backdrop-blur-md relative overflow-hidden group hover:border-perf-gold/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-perf-gold/5 rounded-bl-full pointer-events-none" />
            <div className="h-10 w-10 rounded-2xl bg-perf-gold/10 border border-perf-gold/20 flex items-center justify-center text-perf-gold mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-sm font-bold text-perf-text-main uppercase tracking-wider font-serif-luxury">
              Personal Scent Atelier
            </h3>
            <p className="mt-2 text-xs text-perf-text-muted leading-relaxed">
              Book a 1-on-1 consultation with our sommelier to uncover your
              bespoke perfume profile.
            </p>
            <p className="mt-4 text-xs font-bold text-perf-gold">
              atelier@perfumeboutique.com
            </p>
          </div>

          {/* Card 2: Boutique & Flagship */}
          <div className="rounded-lg border border-perf-border/70 bg-perf-card/40 p-6 backdrop-blur-md relative overflow-hidden group hover:border-perf-gold/60 transition-all duration-300">
            <div className="h-10 w-10 rounded-2xl bg-perf-gold/10 border border-perf-gold/20 flex items-center justify-center text-perf-gold mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="text-sm font-bold text-perf-text-main uppercase tracking-wider font-serif-luxury">
              Flagship Experience
            </h3>
            <p className="mt-2 text-xs text-perf-text-muted leading-relaxed">
              742 Fifth Avenue, Suite 12, New York. Visit our scent room to
              sample rare extracts.
            </p>
            <p className="mt-4 text-xs font-bold text-perf-gold">
              +1 (800) 555-FRAG
            </p>
          </div>

          {/* Card 3: Client Care Assurance */}
          <div className="rounded-lg border border-perf-border/70 bg-perf-card/40 p-6 backdrop-blur-md relative overflow-hidden group hover:border-perf-gold/60 transition-all duration-300">
            <div className="h-10 w-10 rounded-2xl bg-perf-gold/10 border border-perf-gold/20 flex items-center justify-center text-perf-gold mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-sm font-bold text-perf-text-main uppercase tracking-wider font-serif-luxury">
              Authenticity Concierge
            </h3>
            <p className="mt-2 text-xs text-perf-text-muted leading-relaxed">
              Questions about batch codes, ingredients, or shipping status for
              active orders?
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-perf-text-muted font-mono">
              <Clock size={12} className="text-perf-gold" /> Mon - Sat: 09:00 -
              18:00 EST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
