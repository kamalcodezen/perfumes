import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden pt-16 bg-perf-card text-perf-text-main border-t border-perf-border/80">
      {/* Top Wave Layer 1 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none"
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
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none"
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
                <a
                  href="tel:+18007677935"
                  className="hover:text-perf-gold transition-colors duration-300 font-mono"
                >
                  +1 (800) 767-7935
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-perf-gold shrink-0" />
                <a
                  href="mailto:contact@rosswellperfumes.com"
                  className="hover:text-perf-gold transition-colors duration-300"
                >
                  contact@rosswellperfumes.com
                </a>
              </div>
            </div>

            {/* Social Links - LinkedIn & GitHub Only */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/sk-kamaluddin"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-perf-input-bg border border-perf-border/60 flex items-center justify-center text-perf-text-muted hover:text-perf-gold hover:border-perf-gold transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="https://github.com/kamalcodezen"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-perf-input-bg border border-perf-border/60 flex items-center justify-center text-perf-text-muted hover:text-perf-gold hover:border-perf-gold transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif-luxury text-perf-text-main border-b border-perf-border/50 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-base">
              {[
                { label: "Home", path: "/" },
                { label: "All Perfumes", path: "/all-perfumes" },
                { label: "Dashboard", path: "/dashboard" },
                { label: "Profile", path: "/dashboard/profile" },
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
                { label: "Sign In", path: "/auth/signin" },
                { label: "Sign Up", path: "/auth/signup" },
                { label: "Privacy Policy", path: "/" },
                { label: "Terms & Conditions", path: "/" },
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
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-perf-input-bg border border-perf-border text-perf-text-main text-base focus:outline-none focus:border-perf-gold transition-all duration-300 pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-perf-gold hover:text-perf-text-main transition-colors duration-300 p-1 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>

              {isSubscribed && (
                <p className="text-xs text-emerald-400 font-medium flex items-center gap-1 pt-1">
                  <CheckCircle2 size={14} /> Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-perf-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-perf-text-muted">
          <p>
            © {new Date().getFullYear()} RossWell Perfumes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-perf-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
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
