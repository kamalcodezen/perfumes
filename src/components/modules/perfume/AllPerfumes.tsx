import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

import { getPerfumes } from "../../../lib/api/perfume";
import PerfumeFilter from "./PerfumeFilter";
import PerfumeCard from "../../shared/PerfumeCard";
import PerfumeCardSkeleton from "../../shared/PerfumeCardSkeleton";

interface Perfume {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  gender: string;
  shortDescription: string;
  price: number;
}

const AllPerfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const loadPerfumes = async () => {
      try {
        setLoading(true);
        const data = await getPerfumes();
        setPerfumes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPerfumes();
  }, []);

  const filteredPerfumes = useMemo(() => {
    let filtered = [...perfumes];

    // Search
    if (searchQuery) {
      filtered = filtered.filter((perfume) => {
        return (
          perfume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          perfume.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
      });
    }

    // Category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (perfume) => perfume.category === selectedCategory,
      );
    }

    // Gender
    if (selectedGender !== "all") {
      filtered = filtered.filter(
        (perfume) => perfume.gender === selectedGender,
      );
    }

    // Sorting
    switch (sortBy) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "z-a":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }

    return filtered;
  }, [perfumes, searchQuery, selectedCategory, selectedGender, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  if (loading) {
    return (
      <>
        <div className="mt-6 mb-5 text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
          Loading perfumes...
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <PerfumeCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <PerfumeFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="mt-6 mb-5 text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
        Showing {filteredPerfumes.length} perfume
        {filteredPerfumes.length !== 1 && "s"}
      </div>

      <AnimatePresence mode="popLayout">
        {filteredPerfumes.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPerfumes.map((perfume) => (
              <motion.div key={perfume._id} layout>
                <PerfumeCard perfume={perfume} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border-2 border-dashed border-perf-border bg-perf-card py-20 text-center"
          >
            <Sparkles size={50} className="mx-auto mb-5 text-perf-gold" />

            <h3 className="text-2xl font-bold text-perf-text-main">
              No Perfumes Found
            </h3>

            <p className="mt-2 text-perf-text-muted">
              Try another search or change the filters.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedGender("all");
                setSortBy("default");
              }}
              className="mt-8 rounded-xl bg-perf-gold px-6 py-3 font-semibold text-white"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AllPerfumes;
