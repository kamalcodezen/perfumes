import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import SignUp from "../pages/auth/SignUp/SignUp";
import SignIn from "../pages/auth/SignIn/SignIn";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/shared/DashboardHome";
import Profile from "../pages/dashboard/shared/Profile";
import AddPerfume from "../pages/dashboard/admin/AddPerfume";
import Perfumes from "../pages/Perfumes/Perfumes";
import PerfumeDetails from "../pages/Perfumes/PerfumeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-perfumes",
        element: <Perfumes />,
      },
      {
        path: "perfumes/:id",
        element: <PerfumeDetails />,
      },
    ],
  },

  // Auth Routes
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },

  // Dashboard Routes
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Shared
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      // User
      // {
      //   path: "wishlist",
      //   element: <Wishlist />,
      // },

      // Admin
      {
        path: "add-perfume",
        element: <AddPerfume />,
      },
      // {
      //   path: "manage-perfumes",
      //   element: <ManagePerfumes />,
      // },
      // {
      //   path: "manage-users",
      //   element: <ManageUsers />,
      // },
    ],
  },

  // Catch-all route for invalid URLs (404 Page)
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
