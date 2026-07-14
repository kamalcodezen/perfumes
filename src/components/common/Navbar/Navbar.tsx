import { useState } from "react";
import { Menu } from "lucide-react";
import navLogo from "../../../../public/images/navlogo.png";
import Logo from "./Logo";
import UseTheme from "../../../hooks/UseTheme";
import MobileMenu from "./MobileMenu";
import { navbarLinks } from "./navbarLinks";
import NavLinks from "./navLinks";
import { getUserSession } from "../../../lib/core/session";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../../lib/actions/signOut";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-black/90 backdrop-blur py-3">
      <div className="max-w-11/12 mx-auto flex flex-col gap-3">
        {/* 1. Desktop Only Top Title (Logo Image Alignment Fixed)
        <div className="hidden md:flex justify-center items-center">
          <img
            src={navLogo}
            alt="The Perfume Spot"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain select-none drop-shadow-sm"
          />
        </div> */}

        {/* 2. Main Navbar Row */}
        <section className="w-full flex justify-between items-center">
          {/* Mobile Title (Only visible on mobile) */}
          <div className="block md:hidden">
            <img
              src={navLogo}
              alt="The Perfume Spot"
              className="w-48 sm:w-56 md:w-64 h-auto object-contain select-none drop-shadow-sm"
            />
          </div>

          {/* Desktop Logo (Hidden on mobile) */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navbarLinks.map((link) => (
              <NavLinks key={link.path} to={link.path}>
                {link.label}
              </NavLinks>
            ))}
          </div>

          {/* Right Side Options */}
          <div className="flex items-center gap-4">
            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex">
              <UseTheme />
              {loading && !user && (
                <div className="ml-3 h-10 w-18 animate-pulse rounded-md  bg-muted" />
              )}

              {!loading && user && (
                <>
                  <button
                    onClick={handleLogout}
                    className="p-2 px-3 text-base dark:text-black  text-white bg-perf-gold rounded-md ml-3 transition-all duration-300 cursor-pointer"
                  >
                    Logout
                  </button>
                </>
              )}

              {!loading && !user && (
                <>
                  <Link
                    to="/auth/signin"
                    className="p-2 px-3 text-base dark:text-black text-white bg-perf-gold rounded-md ml-3 transition-all duration-300 cursor-pointer"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden text-perf-gold cursor-pointer p-1"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Mobile Drawer */}
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            links={navbarLinks}
          />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
