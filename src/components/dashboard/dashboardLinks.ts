import {
  LayoutDashboard,
  User,
  Heart,
  PlusCircle,
  Package,
  Users,
} from "lucide-react";

export const userNavLinks = [
  {
    title: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Wishlist",
    path: "/dashboard/wishlist",
    icon: Heart,
  },
];

export const adminNavLinks = [
  {
    title: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Add Perfume",
    path: "/dashboard/add-perfume",
    icon: PlusCircle,
  },
  {
    title: "Manage Perfumes",
    path: "/dashboard/manage-perfumes",
    icon: Package,
  },
  {
    title: "Manage Users",
    path: "/dashboard/manage-users",
    icon: Users,
  },
];

// Combine into dashboardNavLinks export
export const dashboardNavLinks = {
  user: userNavLinks,
  admin: adminNavLinks,
};
