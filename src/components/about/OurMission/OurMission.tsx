import { Target, Eye, Gem } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver premium-quality fragrances that combine luxury, elegance, and long-lasting performance for every individual.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become one of the most trusted luxury perfume brands by creating timeless scents inspired by sophistication.",
  },
  {
    icon: Gem,
    title: "Our Promise",
    description:
      "Every RossWell fragrance is crafted with premium ingredients, strict quality standards, and attention to every detail.",
  },
];

const OurMission = () => {
  return (
    <section className="bg-perf-bg py-20">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-perf-gold">
            Our Purpose
          </span>

          <h2 className="mt-3 text-4xl font-bold font-serif-luxury text-perf-text-main">
            Inspired By Excellence
          </h2>

          <p className="mt-5 text-perf-text-muted leading-7">
            RossWell is committed to creating exceptional fragrances that
            reflect elegance, confidence, and individuality through every
            carefully crafted bottle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-perf-border bg-perf-card p-8 transition hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-perf-gold/10 text-perf-gold">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-perf-text-main">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-perf-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
