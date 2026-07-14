import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-perf-bg py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-perf-gold/10 blur-[140px]" />

      <div className="relative max-w-11/12 mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-perf-gold/20 bg-perf-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-perf-gold">
          <Sparkles size={14} />
          About RossWell
        </span>

        <h1 className="mt-6 font-serif-luxury text-4xl font-bold leading-tight text-perf-text-main sm:text-5xl lg:text-6xl">
          Luxury Fragrances
          <span className="block text-perf-gold">Crafted With Passion</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-perf-text-muted sm:text-base">
          RossWell believes that every fragrance tells a story. Our mission is
          to create elegant, long-lasting perfumes using premium ingredients and
          timeless craftsmanship, delivering a luxury experience in every
          bottle.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/all-perfumes"
            className="rounded-xl bg-perf-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:opacity-90"
          >
            Explore Collection
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-perf-border bg-perf-card px-8 py-3 text-sm font-bold uppercase tracking-wider text-perf-text-main transition hover:border-perf-gold"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
