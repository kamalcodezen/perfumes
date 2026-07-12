import {
  LayoutDashboard,
  User,
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
    title: "Add Perfume",
    path: "/dashboard/add-perfume",
    icon: PlusCircle,
  },
  {
    title: "My Perfumes",
    path: "/dashboard/my-perfumes",
    icon: Package,
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

export const dashboardNavLinks = {
  user: userNavLinks,
  admin: adminNavLinks,
};
