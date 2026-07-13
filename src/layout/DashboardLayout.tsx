import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <DashboardSidebar />

      {/* page content */}
      <main className="min-h-screen max-w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
