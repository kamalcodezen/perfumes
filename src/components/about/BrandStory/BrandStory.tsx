import { Sparkles, Gem, Award } from "lucide-react";

const BrandStory = () => {
  return (
    <section className="bg-perf-bg py-20">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900"
            alt="RossWell Luxury Perfume"
            className="w-full h-[650px] rounded-3xl object-cover"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl border border-perf-border bg-perf-card/90 backdrop-blur-md px-6 py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-perf-gold">
              Since 2026
            </p>

            <h3 className="mt-2 text-3xl font-bold font-serif-luxury text-perf-text-main">
              Luxury In Every Bottle
            </h3>
          </div>
        </div>

        {/* Right Content */}

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-perf-gold">
            <Sparkles size={14} />
            Our Story
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-serif-luxury text-perf-text-main leading-tight">
            Crafting Signature
            <span className="block text-perf-gold">Luxury Fragrances</span>
          </h2>

          <p className="mt-6 leading-8 text-perf-text-muted">
            RossWell was founded with one vision—to redefine modern luxury
            through timeless fragrances. Every perfume we create is carefully
            blended using premium ingredients, elegant craftsmanship, and
            attention to detail, delivering unforgettable experiences for every
            occasion.
          </p>

          <p className="mt-5 leading-8 text-perf-text-muted">
            Our collections celebrate confidence, individuality, and
            sophistication, ensuring every bottle becomes a statement of
            personal style.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
                <Gem size={24} />
              </div>

              <div>
                <h3 className="font-bold text-perf-text-main">
                  Premium Ingredients
                </h3>

                <p className="mt-1 text-sm text-perf-text-muted">
                  Carefully sourced aromatic oils and rare botanical extracts
                  from trusted suppliers worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
                <Award size={24} />
              </div>

              <div>
                <h3 className="font-bold text-perf-text-main">
                  Timeless Craftsmanship
                </h3>

                <p className="mt-1 text-sm text-perf-text-muted">
                  Every fragrance is refined through meticulous testing to
                  ensure exceptional quality and long-lasting performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
