import { useEffect } from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, AlertCircle, Compass } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  // Initialize AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen bg-perf-bg text-perf-text-main flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-perf-gold/10 rounded-lg blur-[120px] pointer-events-none" />

      {/* Smooth Fade-Up Entrance Container */}
      <div
        data-aos="fade-up"
        className="relative w-full max-w-xl bg-perf-card/80 backdrop-blur-xl border border-perf-border/80 rounded-3xl p-8 sm:p-12 text-center shadow-sm space-y-6"
      >
        {/* Top Icon Badge */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-perf-gold/10 border border-perf-gold/30 text-perf-gold animate-pulse">
          <Compass size={40} className="stroke-[1.5]" />
        </div>

        {/* Big Error Code Number */}
        <div className="space-y-1">
          <h1 className="text-6xl sm:text-7xl font-black font-mono text-perf-gold tracking-tight">
            {error?.status || "404"}
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-perf-text-main">
            Fragrance Path Not Found
          </h2>
        </div>

        {/* Dynamic Error Message Description */}
        <p className="text-xs sm:text-sm text-perf-text-muted leading-relaxed max-w-md mx-auto">
          {error?.statusText ||
            error?.message ||
            "The page or luxury fragrance item you are looking for might have been moved, renamed, or is temporarily unavailable."}
        </p>

        {/* Small Technical Error Details Badge (If Available) */}
        {(error?.statusText || error?.message) && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
            <AlertCircle size={14} className="shrink-0" />
            <span className="truncate max-w-xs">
              {error.statusText || error.message}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="pt-2 border-t border-perf-border/50" />

        {/* Action Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Go Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-perf-border bg-perf-input-bg hover:border-perf-gold text-perf-text-main px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>

          {/* Return Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-perf-gold hover:opacity-90 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-300 shadow-md active:scale-95"
          >
            <Home size={16} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
