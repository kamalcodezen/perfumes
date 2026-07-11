import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
