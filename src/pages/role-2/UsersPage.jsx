import { users } from "../../data/adminData";

export default function UsersPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Access Control</p>
        <h2 className="text-4xl font-semibold text-slate-900">Users</h2>
        <p className="text-sm text-slate-500">View and manage role based access for admins and executives.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
              <th className="py-2 font-medium">Name</th>
              <th className="py-2 font-medium">Email</th>
              <th className="py-2 font-medium">Department</th>
              <th className="py-2 font-medium">Role</th>
              <th className="py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-100">
                <td className="py-3 text-sm font-medium text-slate-900">{user.name}</td>
                <td className="py-3 text-sm text-slate-700">{user.email}</td>
                <td className="py-3 text-sm text-slate-700">{user.department}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${user.role === "Super Admin" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 text-sm text-slate-700">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
