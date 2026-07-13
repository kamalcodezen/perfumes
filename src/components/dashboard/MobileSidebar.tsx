import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Home, LogOut } from "lucide-react";
import { toast } from "react-toastify";

import { authClient } from "../../lib/auth-client";
import { dashboardNavLinks } from "./dashboardLinks";
import { getUserSession } from "../../lib/core/session";

// Multiple Roles / Custom Role support matching DesktopSidebar
interface ExtendedUser {
  id: string;
  name: string;
  email: string;
  role?: string;
}

const MobileSidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const session = getUserSession();

  // TypeScript Assertion for dynamic MongoDB roles
  const user = session?.user as ExtendedUser | undefined;
  const role = user?.role || "user";

  const menus =
    dashboardNavLinks[role as keyof typeof dashboardNavLinks] ||
    dashboardNavLinks.user ||
    [];

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout Successful");
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-perf-card/90 backdrop-blur-md border-b border-perf-border/80 flex items-center justify-between px-5 shadow-sm">
        <NavLink to="/" className="inline-block">
          <h2 className="text-xl font-bold font-serif-luxury tracking-wider text-perf-gold">
            RossWell
          </h2>
        </NavLink>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-xl text-perf-text-main hover:bg-perf-gold/10 hover:text-perf-gold transition-colors cursor-pointer"
          aria-label="Open Navigation"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-80 bg-perf-card border-r border-perf-border/80 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-perf-border/60">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-serif-luxury text-perf-gold">
              RossWell
            </h2>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-perf-gold animate-pulse" />
              <p className="uppercase tracking-[0.2em] text-[10px] font-semibold text-perf-text-muted">
                {role} Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Profile Summary */}
        <div className="p-5 border-b border-perf-border/40 bg-perf-bg/20">
          <div className="flex items-center gap-3.5 p-2 rounded-2xl bg-perf-card/80 border border-perf-border/50">
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
              <p className="text-[13px] text-perf-text-muted truncate">
                {user?.email || "user@rosswell.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Scroll Area */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 scrollbar-thin scrollbar-thumb-perf-border">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-perf-text-muted/70">
            Navigation
          </p>

          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
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

        {/* Footer Actions */}
        <div className="border-t border-perf-border/80 p-5 bg-perf-bg/30 space-y-1.5">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-perf-text-muted hover:bg-perf-gold/10 hover:text-perf-gold transition-all duration-300"
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
      </aside>
    </>
  );
};

export default MobileSidebar;
