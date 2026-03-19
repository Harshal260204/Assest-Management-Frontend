import { organizations } from "../../data/superAdminData";

export default function OrganizationsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-4xl font-semibold text-slate-900">Organizations</h2>
        <p className="text-sm text-slate-500">All organizations on the platform</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-sm text-slate-500">
              <th className="py-2 font-medium">Organization</th>
              <th className="py-2 font-medium">Assets</th>
              <th className="py-2 font-medium">Plan</th>
              <th className="py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-b border-slate-100">
                <td className="py-3 text-sm font-medium text-slate-900">{org.name}</td>
                <td className="py-3 text-sm text-slate-700">{org.assets}</td>
                <td className="py-3 text-sm text-slate-700">{org.plan}</td>
                <td className="py-3 text-sm text-emerald-700">{org.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
