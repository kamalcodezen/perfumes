import { Link, NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import UseTheme from "../../../hooks/UseTheme";
import type { NavLinkItem } from "./navLinks";
import Logo from "./Logo";
import { getUserSession } from "../../../lib/core/session";
import { signOut } from "../../../lib/actions/signOut";
import { toast } from "react-toastify";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: NavLinkItem[];
}

const MobileMenu = ({ isOpen, setIsOpen, links }: MobileMenuProps) => {
  const navigate = useNavigate();

  // user session
  const { user, loading } = getUserSession();

  // logOut function
  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[90] bg-perf-bg/30 backdrop-blur-sm h-screen transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-[350px] z-[100] bg-perf-bg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform flex flex-col ${
          isOpen
            ? "translate-x-0 shadow-[10px_0_40px_rgba(0,0,0,0.3)]"
            : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-perf-border shadow">
          <Logo />

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-perf-gold cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={35} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between overflow-y-auto pt-4">
          {/* Top Navigation Links */}
          <div className="flex flex-col space-y-1">
            {links.map((link) => (
              <div key={link.path} className="px-6">
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-base p-3 font-bold border-3 border-perf-border rounded-xl transition-all duration-300 hover:bg-perf-text-muted/80 hover:text-white ${
                      isActive ? "bg-perf-text-muted/80 text-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Bottom Section: Theme, CTA & Real World Text */}
          <div className="mt-auto pt-6">
            {/* Theme Toggle */}
            <div className="mx-6 p-2.5 border-3 border-perf-border rounded-xl flex items-center justify-between">
              <p className="text-base font-semibold">Appearance</p>
              <UseTheme />
            </div>

            {/* CTA Buttons */}
            <div className="px-6 pt-3 pb-2 flex flex-col space-y-2.5 font-semibold">
              {/* Loading State */}
              {loading && !user && (
                <div className=" h-10 w-full animate-pulse rounded-md  bg-muted" />
              )}

              {!loading && !user && (
                <>
                  <Link
                    to="/auth/signin"
                    onClick={() => setIsOpen(false)}
                    className="p-3 text-base border-3 border-perf-border rounded-xl text-center hover:bg-perf-text-muted/80 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Login
                  </Link>

                  <Link
                    to="/auth/signup"
                    onClick={() => setIsOpen(false)}
                    className="p-3 text-base border-3 border-perf-border rounded-xl text-center bg-perf-gold text-white hover:opacity-90 transition-all duration-300 cursor-pointer"
                  >
                    Register
                  </Link>
                </>
              )}

              {!loading && user && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="p-3 text-base border-3 border-perf-border rounded-xl text-center bg-perf-gold text-white hover:opacity-95 transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Small Real-World Luxury Footer Text */}
            <div className="px-6 pb-6 text-center">
              <p className="text-xs text-perf-text-muted/70 tracking-wide font-serif-luxury">
                Crafted for Luxury & Elegance • RossWell ©{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
