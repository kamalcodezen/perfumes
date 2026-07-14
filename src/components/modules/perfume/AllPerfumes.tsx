import { useEffect, useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  //  Intersection Observer hook for scroll detection
  const { ref, inView } = useInView();

  //  TanStack Query for Backend Infinite Pagination
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["perfumes"],
    queryFn: ({ pageParam = 1 }) => getPerfumes({ pageParam }),
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
    initialPageParam: 1,
  });

  // Automatically fetch next page from backend on scroll
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // Merge all backend pages into a single perfume list
  const allPerfumes = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page?.data || []);
  }, [data]);

  // Filter and Sort logic on fetched perfumes
  const filteredPerfumes = useMemo(() => {
    let filtered = [...allPerfumes];

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedGender !== "all") {
      filtered = filtered.filter((p) => p.gender === selectedGender);
    }

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
    }

    return filtered;
  }, [allPerfumes, searchQuery, selectedCategory, selectedGender, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <PerfumeCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-12 text-center text-xs font-semibold text-red-500">
        Failed to load fragrances. Please try again.
      </div>
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
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredPerfumes.map((perfume: Perfume) => (
                <motion.div key={perfume._id} layout>
                  <PerfumeCard perfume={perfume} />
                </motion.div>
              ))}
            </motion.div>

            {/*  Scroll Target Div for Dynamic API Calls */}
            <div
              ref={ref}
              className="mt-10 flex justify-center items-center py-6"
            >
              {isFetchingNextPage ? (
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-perf-gold">
                  <Loader2 size={18} className="animate-spin" />
                  <span>Loading more fragrances...</span>
                </div>
              ) : (
                !hasNextPage && (
                  <div className="flex items-center gap-1 text-xs text-perf-text-muted">
                    <Sparkles size={14} className="text-perf-gold" />
                    <span>You've reached the end of the collection</span>
                  </div>
                )
              )}
            </div>
          </>
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
              className="mt-8 rounded-xl bg-perf-gold px-6 py-3 font-semibold text-white cursor-pointer"
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
