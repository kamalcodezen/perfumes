export interface NavLinkItem {
  path: string;
  label: string;
}

export const navbarLinks: NavLinkItem[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/all-perfumes",
    label: "Perfumes",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
  },
];
