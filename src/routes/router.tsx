import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";

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
    ],
  },
]);
