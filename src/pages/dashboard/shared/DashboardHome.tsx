import AdminDashboardContent from "../../../components/dashboard/admin/AdminDashboardContent";
import UserDashboardContent from "../../../components/dashboard/user/UserDashboardContent";

import { getUserSession } from "../../../lib/core/session";

const DashboardHome = () => {
  const { user } = getUserSession();

  const currentUser = user as typeof user & {
    role?: "user" | "admin";
  };

  return currentUser?.role === "admin" ? (
    <AdminDashboardContent />
  ) : (
    <UserDashboardContent />
  );
};

export default DashboardHome;
