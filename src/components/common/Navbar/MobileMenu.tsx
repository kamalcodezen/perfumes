import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";
import UseTheme from "../../../hooks/UseTheme";
import type { NavLinkItem } from "./navLinks";
import Logo from "./Logo";




interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: NavLinkItem[];
}

const MobileMenu = ({ isOpen, setIsOpen, links }: MobileMenuProps) => {
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

        {/* Navigation */}
        <div className="pt-4 flex-1 overflow-y-auto">
          {links.map((link) => (
            <div key={link.path} className="flex flex-col px-6">
              <NavLink
                onClick={() => setIsOpen(false)}
                to={link.path}
                className={({ isActive }) =>
                  `text-base p-3 inline border-3 font-bold border-perf-border rounded-xl mt-3 transition-all duration-300 hover:bg-perf-text-muted/80 hover:text-white ${
                    isActive ? "bg-perf-text-muted/80 text-white" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="mx-6 p-2.5 border-3 border-perf-border rounded-xl flex items-center justify-between">
          <p className="text-base font-semibold">Appearance</p>

          <UseTheme />
        </div>

        {/* CTA Buttons */}
        <div className="p-6 rounded-xl flex flex-col space-y-2.5 font-semibold mb-2">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="p-3 text-base border-3 border-perf-border rounded-xl text-center hover:bg-perf-text-muted/80 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="p-3 text-base border-3 border-perf-border rounded-xl text-center bg-perf-gold text-white hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
