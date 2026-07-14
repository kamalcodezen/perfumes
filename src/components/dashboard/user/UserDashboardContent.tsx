import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  Sparkles,
  Clock,
  ArrowRight,
  Truck,
  CheckCircle2,
  Package,
  Compass,
} from "lucide-react";
import { getUserSession } from "../../../lib/core/session";

interface SessionUser {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  image?: string;
  avatar?: string;
}

// Mock user activities & purchases
const recentOrders = [
  {
    id: "ORD-8821",
    perfume: "Baccarat Rouge 540",
    category: "Extrait de Parfum",
    price: "$435.00",
    date: "12 July 2026",
    status: "In Transit",
  },
  {
    id: "ORD-8410",
    perfume: "Bleu de Chanel",
    category: "Parfum",
    price: "$185.00",
    date: "28 June 2026",
    status: "Delivered",
  },
];

const UserDashboardContent = () => {
  // Directly extract user data from session without extra state
  const session = getUserSession();
  const currentUser: SessionUser | undefined = session?.user || session;

  const name = currentUser?.name || "Valued Fragrance Lover";

  return (
    <div className="space-y-8 text-perf-text-main mt-16 lg:mt-0">
      {/* 1. Welcome Header Banner */}
      <div className="relative overflow-hidden rounded-lg border border-perf-gold/30 bg-gradient-to-r from-perf-card/90 via-perf-card/60 to-perf-bg p-6 sm:p-8 backdrop-blur-xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-perf-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-perf-gold border border-perf-gold/20">
              <Sparkles size={12} /> Personal Atelier
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-perf-text-main">
              Welcome back, {name}
            </h1>
            <p className="text-sm text-perf-text-muted max-w-lg leading-relaxed">
              Track your luxury orders, view saved signature fragrances, and
              discover your next olfactory journey.
            </p>
          </div>

          <Link
            to="/all-perfumes"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-perf-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition duration-300 hover:opacity-90 active:scale-95 shrink-0 self-start sm:self-auto"
          >
            <Compass size={16} />
            <span>Explore Fragrances</span>
          </Link>
        </div>
      </div>

      {/* 2. Customer Summary Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-perf-border/70 bg-perf-card/50 p-5 backdrop-blur-md transition duration-300 hover:border-perf-gold/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-perf-text-muted">
              Total Purchases
            </span>
            <div className="h-9 w-9 rounded-xl bg-perf-gold/10 flex items-center justify-center text-perf-gold">
              <ShoppingBag size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold font-serif-luxury text-perf-text-main">
            02 Orders
          </p>
        </div>

        <div className="rounded-2xl border border-perf-border/70 bg-perf-card/50 p-5 backdrop-blur-md transition duration-300 hover:border-perf-gold/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-perf-text-muted">
              Active Shipment
            </span>
            <div className="h-9 w-9 rounded-xl bg-perf-gold/10 flex items-center justify-center text-perf-gold">
              <Truck size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold font-serif-luxury text-perf-text-main">
            1 Package
          </p>
        </div>

        <div className="rounded-2xl border border-perf-border/70 bg-perf-card/50 p-5 backdrop-blur-md transition duration-300 hover:border-perf-gold/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-perf-text-muted">
              Membership Tier
            </span>
            <div className="h-9 w-9 rounded-xl bg-perf-gold/10 flex items-center justify-center text-perf-gold">
              <Sparkles size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold font-serif-luxury text-perf-gold">
            Signature VIP
          </p>
        </div>
      </div>

      {/* 3. Orders Overview & VIP Benefits Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recent Orders (7 Cols) */}
        <div className="lg:col-span-7 rounded-lg border border-perf-border/70 bg-perf-card/40 p-6 space-y-5 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-perf-border/40 pb-4">
            <h2 className="text-lg font-bold font-serif-luxury text-perf-text-main flex items-center gap-2">
              <Package size={18} className="text-perf-gold" /> Recent Purchases
            </h2>
            <span className="text-sm text-perf-text-muted">History</span>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-perf-input-bg/40 border border-perf-border/30 hover:border-perf-gold/40 transition duration-300 gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold font-mono text-perf-gold">
                      {order.id}
                    </span>
                    <span className="text-[10px] text-perf-text-muted">
                      • {order.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-perf-text-main">
                    {order.perfume}
                  </h3>
                  <p className="text-[11px] text-perf-text-muted">
                    {order.category}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 border-t sm:border-t-0 border-perf-border/30 pt-2 sm:pt-0">
                  <span className="text-sm font-bold font-mono text-perf-text-main">
                    {order.price}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                      order.status === "Delivered"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}
                  >
                    {order.status === "Delivered" ? (
                      <CheckCircle2 size={11} />
                    ) : (
                      <Clock size={11} />
                    )}
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Exclusive Privileges & Quick Navigation (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-lg border border-perf-gold/30 bg-perf-gold/10 p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-perf-gold flex items-center gap-1.5">
              <Sparkles size={16} /> Member Privileges
            </h3>
            <ul className="space-y-3 text-sm text-perf-text-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={15}
                  className="text-perf-gold shrink-0 mt-0.5"
                />
                <span>
                  Complimentary luxury travel samples with every order.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={15}
                  className="text-perf-gold shrink-0 mt-0.5"
                />
                <span>Priority express shipping on all orders over $200.</span>
              </li>
            </ul>
          </div>

          {/* Quick Browse Link */}
          <Link
            to="/all-perfumes"
            className="flex items-center justify-between p-5 rounded-2xl bg-perf-card/60 border border-perf-border hover:border-perf-gold text-perf-text-main hover:text-perf-gold transition duration-300 group"
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              Browse Full Fragrance Collection
            </span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardContent;
