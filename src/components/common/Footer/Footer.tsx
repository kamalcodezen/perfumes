import { Link } from "react-router-dom";
import { Send, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-16">
      {/* Top Wave Layer 1 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0"
      >
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-32 text-perf-gold/15"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Top Wave Layer 2 (Opposite Curve Accent) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0"
      >
        <svg
          className="relative block w-full h-20 sm:h-28 md:h-36 text-perf-border/40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C300,110 600,10 900,80 C1050,110 1150,40 1200,20 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-bold font-serif-luxury text-perf-gold tracking-wide">
                RossWell
              </h2>
            </Link>
            <p className="text-perf-text-muted text-base leading-relaxed max-w-sm">
              Crafting timeless, luxury fragrances designed to leave an
              unforgettable impression. Elevate your everyday presence with our
              exclusive collections.
            </p>

            <div className="space-y-2 pt-2 text-base text-perf-text-muted">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-perf-gold shrink-0" />
                <span>786 Perfume Avenue, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-perf-gold shrink-0" />
                <span>+1 (800) 767-7935</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif-luxury text-perf-text-main border-b border-perf-border/50 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-base">
              {[
                {
                  label: "Home",
                  path: "/",
                },
                {
                  label: "Collections",
                  path: "/collections",
                },
                {
                  label: "Best Sellers",
                  path: "/best-sellers",
                },
                {
                  label: "About",
                  path: "/about",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-perf-text-muted hover:text-perf-gold transition-colors duration-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif-luxury text-perf-text-main border-b border-perf-border/50 pb-2 inline-block">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-base">
              {[
                {
                  label: "Contact Us",
                  path: "/contact",
                },
                {
                  label: "FAQ",
                  path: "/faq",
                },
                {
                  label: "Privacy Policy",
                  path: "/privacy",
                },
                {
                  label: "Terms & Conditions",
                  path: "/terms",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-perf-text-muted hover:text-perf-gold transition-colors duration-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif-luxury text-perf-text-main border-b border-perf-border/50 pb-2 inline-block">
              Join Our World
            </h3>
            <p className="text-perf-text-muted text-sm leading-relaxed">
              Subscribe to receive exclusive offers, early access to new
              releases, and luxury fragrance tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-perf-input-bg border border-perf-border text-perf-text-main text-base focus:outline-none focus:border-perf-gold transition-all duration-300 pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-perf-gold hover:text-perf-text-main transition-colors duration-300 p-1"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-perf-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-perf-text-muted">
          <p>
            © {new Date().getFullYear()} RossWell Perfumes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
