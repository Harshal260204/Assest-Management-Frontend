import { Eye, Search } from "lucide-react";
import { superAdminUsers } from "../../data/superAdminData";

export default function SuperAdminUsersPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-4xl font-semibold text-slate-900">Users</h2>
        <p className="text-sm text-slate-500">All users across organizations</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input placeholder="Search users..." className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm" />
          </div>
          <select className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700">
            <option>All Organizations</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-sm text-slate-500">
              <th className="py-2 font-medium">Name</th>
              <th className="py-2 font-medium">Email</th>
              <th className="py-2 font-medium">Organization</th>
              <th className="py-2 font-medium">Role</th>
              <th className="py-2 font-medium">Status</th>
              <th className="py-2 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {superAdminUsers.map((user) => (
              <tr key={user.id} className="border-b border-slate-100">
                <td className="py-3 text-sm font-medium text-slate-900">{user.name}</td>
                <td className="py-3 text-sm text-slate-500">{user.email}</td>
                <td className="py-3 text-sm text-slate-800">{user.org}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${user.role === "Admin" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3">
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${user.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-100 text-slate-500"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3 text-right text-slate-600">
                  <Eye className="ml-auto h-4 w-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
