import AdminDashboardContent from "../../../components/dashboard/admin/AdminDashboardContent";
import UserDashboardContent from "../../../components/dashboard/user/UserDashboardContent";
import { authClient } from "../../../lib/auth-client";

const DashboardHome = () => {
  const { data } = authClient.useSession();

  return data?.user?.role === "admin" ? (
    <AdminDashboardContent />
  ) : (
    <UserDashboardContent />
  );
};

export default DashboardHome;
