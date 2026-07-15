import { Mail, Calendar, ShieldCheck, ShieldAlert, User } from "lucide-react";

interface UserItem {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
}

interface ManageUsersTableProps {
  users: UserItem[];
}

const ManageUsersTable = ({ users }: ManageUsersTableProps) => {
  if (users.length === 0) {
    return (
      <div className="text-center p-12 rounded-2xl border border-dashed border-perf-border/60 bg-perf-card/10 text-perf-text-muted text-sm font-medium">
        No registered clients found in the system database.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-perf-border/60 bg-perf-card/30 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-perf-card/80 border-b border-perf-border/60 text-perf-text-muted uppercase text-[10px] font-bold tracking-[0.15em]">
              <th className="py-4 px-6">Boutique Member</th>
              <th className="py-4 px-6">Digital Identity</th>
              <th className="py-4 px-6">Subscription Date</th>
              <th className="py-4 px-6 text-right">Account Security</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-perf-border/20">
            {users.map((user) => (
              <tr
                key={user._id}
                className="group hover:bg-perf-card/60 transition-all duration-300 ease-out"
              >
                {/* Member Profile Info */}
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-perf-gold/10 border border-perf-gold/20 text-perf-gold shadow-sm group-hover:scale-105 transition-transform">
                      <User size={16} />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-perf-text-main group-hover:text-perf-gold transition-colors">
                        {user.name}
                      </span>
                      <span className="block text-[10px] text-perf-text-muted font-mono">
                        ID: {user._id.slice(-6).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Email Identity */}
                <td className="py-4 px-6 whitespace-nowrap text-sm text-perf-text-muted font-mono">
                  <span className="flex items-center gap-2 group-hover:text-perf-text-main transition-colors">
                    <Mail size={13} className="text-perf-gold/50" />
                    {user.email}
                  </span>
                </td>

                {/* Account Created Date */}
                <td className="py-4 px-6 whitespace-nowrap text-sm text-perf-text-muted">
                  <span className="flex items-center gap-2">
                    <Calendar size={13} className="text-perf-text-muted/60" />
                    {new Date(user.createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </td>

                {/* Verification Glow Badges */}
                <td className="py-4 px-6 whitespace-nowrap text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                      user.emailVerified
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.05)]"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.05)]"
                    }`}
                  >
                    {user.emailVerified ? (
                      <>
                        <ShieldCheck size={12} className="text-emerald-400" />
                        Verified
                      </>
                    ) : (
                      <>
                        <ShieldAlert size={12} className="text-amber-400" />
                        Unverified
                      </>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersTable;
