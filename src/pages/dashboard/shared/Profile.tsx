import AdminProfileContent from "../../../components/dashboard/admin/AdminProfileContent";
import UserProfileContent from "../../../components/dashboard/user/UserProfileContent";
import { authClient } from "../../../lib/auth-client";

const Profile = () => {
  const { data } = authClient.useSession();

  return data?.user?.role === "admin" ? (
    <AdminProfileContent />
  ) : (
    <UserProfileContent />
  );
};

export default Profile;
