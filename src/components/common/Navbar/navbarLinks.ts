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
    path: "/collections",
    label: "Collections",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
  },
];
