import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import navLogo from "../../../../public/images/navlogo.png";
import Logo from "./Logo";
import UseTheme from "../../../hooks/UseTheme";
import MobileMenu from "./MobileMenu";
import { navbarLinks } from "./navbarLinks";
import { getUserSession } from "../../../lib/core/session";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../../lib/actions/signOut";
import { toast } from "react-toastify";
import NavLinks from "./NavLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { user, loading } = getUserSession();

  // Initialize AOS for smooth top entrance
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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
    <nav
      data-aos="fade-up"
      className="fixed top-0 md:top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-11/12 md:max-w-7xl z-[100] transition-all duration-300 bg-perf-card/90 dark:bg-perf-card/80 backdrop-blur-md border-b md:border border-perf-border/60 md:rounded-xl shadow-lg py-2.5 px-4 md:px-2"
    >
      <div className="max-w-11/12 mx-auto flex flex-col gap-3">
        <section className="w-full flex justify-between items-center">
          <div className="block md:hidden">
            <img
              src={navLogo}
              alt="The Perfume Spot"
              className="w-48 sm:w-56 md:w-64 h-auto object-contain select-none drop-shadow-sm"
            />
          </div>

          <div className="hidden md:block">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navbarLinks.map((link) => (
              <NavLinks key={link.path} to={link.path}>
                {link.label}
              </NavLinks>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <UseTheme />
              {loading && !user && (
                <div className="ml-3 h-10 w-18 animate-pulse rounded-md bg-muted" />
              )}

              {!loading && user && (
                <button
                  onClick={handleLogout}
                  className="p-2 px-3 text-base dark:text-black text-white bg-perf-gold rounded-md ml-3 transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              )}

              {!loading && !user && (
                <Link
                  to="/auth/signin"
                  className="p-2 px-3 text-base dark:text-black text-white bg-perf-gold rounded-md ml-3 transition-all duration-300 cursor-pointer"
                >
                  Login
                </Link>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden text-perf-gold cursor-pointer p-1"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>

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
