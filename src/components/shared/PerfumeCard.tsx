import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, Sparkles } from "lucide-react";

interface Perfume {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  gender: string;
  price: number;
  shortDescription: string;
}

interface PerfumeCardProps {
  perfume: Perfume;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
  const { _id, title, imageUrl, category, gender, price, shortDescription } =
    perfume;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-perf-border/60 bg-perf-card/40 p-4 transition-all duration-500  hover:border-perf-gold/60 hover:bg-perf-card ">
      {/* Top Meta Info Bar */}
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-perf-gold">
            <Sparkles size={12} />
            {category}
          </span>
          <span className="text-[10px] text-perf-text-muted">•</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-perf-text-muted">
            {gender}
          </span>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-perf-input-bg text-perf-text-muted transition-all hover:bg-perf-gold hover:text-white cursor-pointer active:scale-90"
          aria-label="Wishlist"
        >
          <Heart size={15} />
        </button>
      </div>

      {/* Center Image Zone */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-perf-input-bg">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
        />

        {/* Floating Explore Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            to={`/perfumes/${_id}`}
            className="flex items-center gap-2 rounded-full bg-perf-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Quick View</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom Content & Pricing */}
      <div className="mt-4 space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="font-serif-luxury text-lg font-bold text-perf-text-main transition-colors group-hover:text-perf-gold line-clamp-1">
            {title}
          </h2>
          <span className="text-lg font-bold text-perf-gold font-mono shrink-0">
            ${price}
          </span>
        </div>

        <p
          title={shortDescription}
          className="text-base sm:text-sm text-perf-text-muted  leading-relaxed line-clamp-1"
        >
          {shortDescription}
        </p>
      </div>
    </article>
  );
};

export default PerfumeCard;
