import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <DashboardSidebar />

      <div className="min-h-screen flex-1">
        {/* top navbar */}
        <DashboardNavbar />

        {/* page content */}
        <main className="min-h-screen ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
