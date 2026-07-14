import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-perf-border bg-perf-input-bg text-perf-text-main disabled:opacity-40 cursor-pointer"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-8 w-8 rounded-lg text-xs font-bold transition cursor-pointer ${
            currentPage === page
              ? "bg-perf-gold text-white"
              : "border border-perf-border text-perf-text-muted hover:border-perf-gold"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-perf-border bg-perf-input-bg text-perf-text-main disabled:opacity-40 cursor-pointer"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
