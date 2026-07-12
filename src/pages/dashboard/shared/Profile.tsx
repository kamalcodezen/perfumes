import AdminProfileContent from "../../../components/dashboard/admin/AdminProfileContent";
import UserProfileContent from "../../../components/dashboard/user/UserProfileContent";
import { getUserSession } from "../../../lib/core/session";

const Profile = () => {
  const { user } = getUserSession();

  const currentUser = user as typeof user & {
    role?: "user" | "admin";
  };

  if (currentUser?.role === "admin") {
    return <AdminProfileContent />;
  }

  return <UserProfileContent />;
};

export default Profile;
