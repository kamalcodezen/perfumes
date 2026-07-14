import { NavLink } from "react-router-dom";

interface NavLinksProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLinks = ({ to, children, onClick }: NavLinksProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-base font-medium transition-colors duration-300 px-3 py-2 rounded-md select-none
        ${
          isActive
            ? "text-perf-gold font-semibold underline decoration-2 underline-offset-8"
            : "text-perf-gold hover:text-[var(--perf-text-main)]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinks;
