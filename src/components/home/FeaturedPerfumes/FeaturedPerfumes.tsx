import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPerfumes } from "../../../lib/api/perfume";

import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import PerfumeCard from "../../shared/PerfumeCard";
import PerfumeCardSkeleton from "../../shared/PerfumeCardSkeleton";

// Perfume Data Interface
export interface Perfume {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  gender: string;
  price: number;
  shortDescription: string;
  scentNotes?: string;
}

const FeaturedPerfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFeaturedPerfumes = async () => {
      try {
        setLoading(true);
        const allPerfumes = await getPerfumes();

        // Slice the array to display only the top 6 featured items
        setPerfumes(Array.isArray(allPerfumes) ? allPerfumes.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching featured perfumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPerfumes();
  }, []);

  return (
    <section className="py-16 bg-perf-bg text-perf-text-main">
      <div className="max-w-11/12 mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-perf-border/60 pb-6">
          <div className="space-y-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.3em] text-perf-gold">
              <Sparkles size={14} /> Curated Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-perf-text-main">
              Featured Fragrances
            </h2>
            <p className="text-xs sm:text-sm text-perf-text-muted max-w-lg">
              Explore our handpicked collection of signature scents, crafted
              with rare notes and timeless sophistication.
            </p>
          </div>

          <Link
            to="/all-perfumes"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-perf-gold hover:text-perf-text-main transition-colors group self-start sm:self-auto"
          >
            <span>Explore All Fragrances</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Loading State */}
        {loading ? (
          <>
            <div className="mt-6 mb-5 text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
              Loading perfumes...
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <PerfumeCardSkeleton key={index} />
              ))}
            </div>
          </>
        ) : perfumes.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 bg-perf-card/40 rounded-3xl border border-perf-border/60">
            <p className="text-sm text-perf-text-muted">
              No featured perfumes available right now.
            </p>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {perfumes.map((perfume) => (
              <PerfumeCard key={perfume._id} perfume={perfume} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPerfumes;
