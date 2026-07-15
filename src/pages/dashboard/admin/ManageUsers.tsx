import { useEffect, useState } from "react";
import { getUsers } from "../../../lib/api/user";
import ManageUsersTable from "../../../components/dashboard/admin/manageUsers/ManageUsersTable";

interface UserItem {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
}

const ManageUsers = () => {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getUsers();
        setUsers(Array.isArray(allUsers) ? allUsers : allUsers?.data || []);
      } catch (error) {
        console.error("Error fetching users inside dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-perf-gold opacity-75"></div>
          <div className="relative rounded-full h-4 w-4 bg-perf-gold"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-20 lg:mt-5 text-perf-text-main animate-fadeIn">
      <div className="ml-5  border-b border-perf-border/40 pb-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold font-serif-luxury tracking-tight">
          Client Registry Management
        </h1>
        <p className="text-xs sm:text-sm text-perf-text-muted mt-1">
          Review, analyze, and manage active accounts authenticated with
          Rosswell Perfumes.
        </p>
      </div>

      <ManageUsersTable users={users} />
    </div>
  );
};

export default ManageUsers;
