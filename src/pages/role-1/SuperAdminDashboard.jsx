import { Activity, Building2, Package, TrendingUp, UserPlus, Users } from "lucide-react";
import { organizations, recentActivity, superAdminStats } from "../../data/superAdminData";

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-4xl font-semibold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-500">Platform overview and key metrics</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {superAdminStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="text-4xl font-semibold text-slate-900">{item.value}</p>
                <p className="text-sm text-emerald-700">{item.change}</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
                {item.label.includes("Organizations") ? <Building2 className="h-4 w-4" /> : null}
                {item.label.includes("Users") ? <Users className="h-4 w-4" /> : null}
                {item.label.includes("Assets") ? <Package className="h-4 w-4" /> : null}
                {item.label.includes("Active") ? <Activity className="h-4 w-4" /> : null}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="mb-4 text-2xl font-semibold text-slate-900">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((item, index) => (
              <div key={item.id} className="flex gap-3">
                <div className="pt-0.5 text-blue-600">
                  {index % 4 === 0 ? <Building2 className="h-4 w-4" /> : null}
                  {index % 4 === 1 ? <UserPlus className="h-4 w-4 text-emerald-600" /> : null}
                  {index % 4 === 2 ? <Activity className="h-4 w-4 text-amber-600" /> : null}
                  {index % 4 === 3 ? <TrendingUp className="h-4 w-4 text-emerald-600" /> : null}
                </div>
                <div>
                  <p className="text-sm text-slate-800">{item.text}</p>
                  <p className="text-xs text-slate-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white lg:col-span-2">
          <div className="px-5 py-4">
            <h3 className="text-2xl font-semibold text-slate-900">Top Organizations</h3>
          </div>
          <div className="px-5 pb-4">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="py-2 font-medium">Organization</th>
                  <th className="py-2 font-medium">Assets</th>
                  <th className="py-2 font-medium">Plan</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org) => (
                  <tr key={org.id} className="border-t border-slate-100">
                    <td className="py-3 text-sm font-medium text-slate-900">{org.name}</td>
                    <td className="py-3 text-sm text-slate-700">{org.assets}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${org.plan === "Pro" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                        {org.plan}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        {org.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
