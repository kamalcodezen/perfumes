import { NavLink, useNavigate } from "react-router-dom";
import { Home, LogOut } from "lucide-react";
import { toast } from "react-toastify";


import { dashboardNavLinks } from "./dashboardLinks";
import { getUserSession } from "../../lib/core/session";
import { authClient } from "../../lib/auth-client";

// Extended User Type to satisfy TypeScript
interface ExtendedUser {
  id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
}

const DesktopSidebar = () => {
  const navigate = useNavigate();

  const session = getUserSession();

  // Explicit Type Cast here
  const user = session?.user as ExtendedUser | undefined;
  const role = user?.role || "user";

  const menus =
    dashboardNavLinks[role as keyof typeof dashboardNavLinks] ||
    dashboardNavLinks.user;

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout Successful");
    navigate("/");
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-perf-card border-r border-perf-border/80 shadow-2xl z-20">
      {/* Brand & Logo Header */}
      <div className="p-6 border-b border-perf-border/60">
        <NavLink to="/" className="inline-block group">
          <h2 className="text-2xl font-bold tracking-wider font-serif-luxury text-perf-gold group-hover:opacity-90 transition-opacity">
            RossWell
          </h2>
        </NavLink>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-perf-gold animate-pulse" />
          <p className="uppercase tracking-[0.25em] text-[10px] font-semibold text-perf-text-muted">
            {role} Dashboard
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5 scrollbar-thin scrollbar-thumb-perf-border">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-perf-gold/15 text-perf-gold border-l-4 border-perf-gold pl-3 shadow-sm"
                    : "text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-text-main hover:translate-x-1"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={17}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-perf-gold"
                        : "text-perf-text-muted group-hover:text-perf-gold"
                    }`}
                  />
                  <span>{item.title}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom User Profile & Actions */}
      <div className="border-t border-perf-border/80 p-5 bg-perf-bg/30">
        {/* Profile Card */}
        <div className="mb-5 flex items-center gap-3.5 p-2 rounded-2xl bg-perf-card/80 border border-perf-border/50">
          <div className="relative">
            <div className="h-11 w-11 rounded-full bg-perf-gold/20 border border-perf-gold/40 flex items-center justify-center text-sm font-bold font-serif-luxury text-perf-gold shadow-inner">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-perf-card" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-perf-text-main font-serif-luxury truncate">
              {user?.name || "Member"}
            </h3>
            <p className="text-[11px] text-perf-text-muted truncate">
              {user?.email || "user@rosswell.com"}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="space-y-1.5">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold transition-all duration-300 hover:translate-x-1"
          >
            <Home size={16} className="text-perf-text-muted" />
            <span>Back to Storefront</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/5 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
          >
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
