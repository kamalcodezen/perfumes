import {
  DollarSign,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  ArrowUpRight,
  Plus,
  Sparkles,
  MoreVertical,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock Stat Cards Data
const stats = [
  {
    title: "Total Revenue",
    value: "$24,850.00",
    change: "+14.2%",
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "1,240",
    change: "+8.5%",
    isPositive: true,
    icon: ShoppingBag,
  },
  {
    title: "Fragrances in Stock",
    value: "86 Items",
    change: "+4 Added",
    isPositive: true,
    icon: Package,
  },
  {
    title: "Active Customers",
    value: "3,420",
    change: "+18.3%",
    isPositive: true,
    icon: Users,
  },
];

// Mock Recent Orders Data
const recentOrders = [
  {
    id: "ORD-9281",
    customer: "Elena Rostova",
    perfume: "Baccarat Rouge 540",
    amount: "$435.00",
    status: "Delivered",
    date: "10 mins ago",
  },
  {
    id: "ORD-9280",
    customer: "Julian Vance",
    perfume: "Bleu de Chanel Parfum",
    amount: "$185.00",
    status: "Processing",
    date: "25 mins ago",
  },
  {
    id: "ORD-9279",
    customer: "Sophia Al-Mansoor",
    perfume: "Santal 33",
    amount: "$320.00",
    status: "Shipped",
    date: "1 hour ago",
  },
  {
    id: "ORD-9278",
    customer: "Marcus Sterling",
    perfume: "Oud Wood EDP",
    amount: "$295.00",
    status: "Delivered",
    date: "3 hours ago",
  },
];

// Mock Top Fragrances Data
const topPerfumes = [
  {
    name: "Bleu de Chanel Parfum",
    category: "Extrait de Parfum",
    sales: "342 sales",
    revenue: "$63,270",
  },
  {
    name: "Baccarat Rouge 540",
    category: "Extrait de Parfum",
    sales: "289 sales",
    revenue: "$125,715",
  },
  {
    name: "Sauvage Elixir",
    category: "Extrait de Parfum",
    sales: "210 sales",
    revenue: "$52,500",
  },
];

const AdminDashboardContent = () => {
  return (
    <div className="space-y-8 mt-15 lg:mt-0 text-perf-text-main">
      {/* 1. Top Welcome Banner & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-perf-border/80 bg-gradient-to-r from-perf-card/90 via-perf-card/50 to-perf-card/90 p-6 shadow-sm backdrop-blur-xl">
        <div className="space-y-1">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-perf-gold">
            <Sparkles size={14} /> Atelier Overview
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-perf-text-main">
            Welcome Back, Admin
          </h1>
          <p className="text-xs text-perf-text-muted">
            Here is a summary of your boutique performance and recent sales
            activity.
          </p>
        </div>

        <Link
          to="/dashboard/add-perfume"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-perf-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:opacity-90 active:scale-95 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add New Perfume</span>
        </Link>
      </div>

      {/* 2. Key Performance Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-perf-border/70 bg-perf-card/60 p-5 shadow-md backdrop-blur-md transition-all duration-300  "
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-perf-text-muted">
                  {stat.title}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-perf-gold/10 text-perf-gold">
                  <Icon size={18} />
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-black font-mono text-perf-text-main">
                  {stat.value}
                </span>
                <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-500">
                  <TrendingUp size={12} />
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Main Data Section (Orders & Top Fragrances) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: Recent Orders Table */}
        <div className="lg:col-span-8 rounded-lg border border-perf-border/80 bg-perf-card/50 p-6 shadow-sm backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-perf-border/50">
            <div>
              <h2 className="text-lg font-bold font-serif-luxury text-perf-text-main">
                Recent Orders
              </h2>
              <p className="text-xs text-perf-text-muted">
                Latest customer transactions and order statuses.
              </p>
            </div>
            <button
              type="button"
              className="text-xs font-bold text-perf-gold hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-perf-border/40 text-perf-text-muted uppercase font-semibold tracking-wider">
                  <th className="pb-3 px-2">Order ID</th>
                  <th className="pb-3 px-2">Customer</th>
                  <th className="pb-3 px-2">Fragrance</th>
                  <th className="pb-3 px-2">Amount</th>
                  <th className="pb-3 px-2">Status</th>
                  <th className="pb-3 px-2 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-perf-border/30">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="group hover:bg-perf-card/80 transition-colors"
                  >
                    <td className="py-3.5 px-2 font-mono font-bold text-perf-gold">
                      {order.id}
                    </td>
                    <td className="py-3.5 px-2 font-medium text-perf-text-main">
                      {order.customer}
                    </td>
                    <td className="py-3.5 px-2 text-perf-text-muted">
                      {order.perfume}
                    </td>
                    <td className="py-3.5 px-2 font-mono font-bold text-perf-text-main">
                      {order.amount}
                    </td>
                    <td className="py-3.5 px-2">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          order.status === "Delivered"
                            ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                            : order.status === "Shipped"
                              ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-right text-perf-text-muted flex items-center justify-end gap-1">
                      <Clock size={12} /> {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 4 Cols: Top Performing Fragrances */}
        <div className="lg:col-span-4 rounded-lg border border-perf-border/80 bg-perf-card/50 p-6 shadow-sm backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-perf-border/50">
            <div>
              <h2 className="text-lg font-bold font-serif-luxury text-perf-text-main">
                Top Fragrances
              </h2>
              <p className="text-xs text-perf-text-muted">
                Best-selling scents this month.
              </p>
            </div>
            <button
              type="button"
              className="text-perf-text-muted hover:text-perf-text-main"
            >
              <MoreVertical size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {topPerfumes.map((perfume, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl bg-perf-input-bg/40 border border-perf-border/30 hover:border-perf-gold/40 transition-colors"
              >
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-perf-text-main line-clamp-1">
                    {perfume.name}
                  </p>
                  <p className="text-[10px] uppercase text-perf-gold font-medium">
                    {perfume.category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold font-mono text-perf-text-main">
                    {perfume.revenue}
                  </p>
                  <p className="text-[10px] text-perf-text-muted">
                    {perfume.sales}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
