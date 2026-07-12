import { Bell, Moon, Sun } from "lucide-react";
// import { useLocation } from "react-router-dom";
import { authClient } from "../../lib/auth-client";
import UseTheme from "../../hooks/UseTheme";
import logo from "../../../public/images/navlogo.png";

const DashboardNavbar = () => {
  // const location = useLocation();

  const { data } = authClient.useSession();

  return (
    <header className="sticky top-0 z-30 h-20 border-b border-perf-border bg-perf-card/80 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-5 lg:px-8">
        {/* Left */}

        <div>
          <img
            src={logo}
            alt="The Perfume Spot"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain select-none drop-shadow-sm"
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-perf-border hover:border-perf-gold transition">
            <Bell size={20} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <UseTheme />

          <div className="flex items-center gap-3 rounded-xl border border-perf-border px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-perf-gold font-bold text-white">
              {data?.user?.name?.charAt(0).toUpperCase()}
            </div>

            <div className="hidden lg:block">
              <h3 className="font-semibold text-perf-text-main">
                {data?.user?.name}
              </h3>

              <p className="text-xs text-perf-text-muted">{data?.user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
