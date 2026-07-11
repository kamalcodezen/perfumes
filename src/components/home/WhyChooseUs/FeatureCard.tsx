import type { Feature } from "./featuresData";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = feature.icon;

  // 1st & 3rd cards (index: 0, 2) have top bar, 2nd & 4th (index: 1, 3) have bottom bar
  const isTopBar = index % 2 === 0;

  // Normal state: Alternating up/down position
  // Hover state: Transitions back to initial 0 offset position
  const offsetClasses =
    index % 2 === 0
      ? "-translate-y-4 hover:translate-y-0"
      : "translate-y-4 hover:translate-y-0";

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border border-perf-border/80 bg-perf-card p-8 shadow-sm transition-transform duration-300 ease-in-out w-full min-h-[220px] ${offsetClasses}`}
    >
      {/* Top Golden Accent Bar */}
      {isTopBar && (
        <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-perf-gold" />
      )}

      {/* Icon Area */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-perf-gold/10 text-perf-gold">
        <Icon size={28} />
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-perf-text-main font-serif-luxury">
          {feature.title}
        </h3>

        <p className="text-sm leading-relaxed text-perf-text-muted">
          {feature.description}
        </p>
      </div>

      {/* Bottom Golden Accent Bar */}
      {!isTopBar && (
        <div className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full bg-perf-gold" />
      )}
    </div>
  );
};

export default FeatureCard;
