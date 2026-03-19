import { Activity, AlertTriangle, Boxes, CheckCircle2, PackageX, ShieldAlert, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { assets, assignments, stats } from "../../data/adminData";
import StatusBadge from "../../components/admin/StatusBadge";

const statItems = [
  { label: "Total Assets", value: stats.totalAssets, note: "All tracked items", icon: Boxes },
  { label: "Assigned", value: stats.assigned, note: "In employee use", icon: Activity },
  { label: "Available", value: stats.available, note: "Ready to assign", icon: CheckCircle2 },
  { label: "In Repair", value: stats.inRepair, note: "Under maintenance", icon: ShieldAlert },
  { label: "Disposed", value: stats.disposed, note: "Retired inventory", icon: Trash2 }
];

const assetsInRepair = assets.filter((item) => item.status === "In Repair");
const unassignedAssets = assets.filter((item) => item.status === "Available");

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Overview</p>
        <h2 className="text-4xl font-semibold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-500">Monitor asset lifecycle, track active allocations, and keep operational inventory clean.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {statItems.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-4xl font-semibold text-slate-900">{item.value}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
              <item.icon className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-amber-100 p-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{assetsInRepair.length} asset in repair</p>
              <p className="text-xs text-slate-500">Review and update maintenance status</p>
            </div>
            <Link to="/role-2/assets" className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold">
              Review
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-100 p-2">
              <PackageX className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{unassignedAssets.length} unassigned assets</p>
              <p className="text-xs text-slate-500">Available assets waiting to be assigned</p>
            </div>
            <Link to="/role-2/assets" className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold">
              Assign
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 className="text-xl font-semibold text-slate-900">Recent Asset Assignments</h3>
          <Link to="/role-2/assignments" className="text-xs text-slate-500 hover:text-slate-700">
            View all →
          </Link>
        </div>
        <div className="px-5 py-3">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
                <th className="py-2 font-medium">Asset</th>
                <th className="py-2 font-medium">Employee</th>
                <th className="py-2 font-medium">Department</th>
                <th className="py-2 font-medium">Status</th>
                <th className="py-2 font-medium">Assigned Date</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => {
                const asset = assets.find((item) => item.id === assignment.assetId);
                if (!asset) return null;
                return (
                  <tr key={assignment.id} className="border-b border-slate-100">
                    <td className="py-3">
                      <p className="text-sm font-medium text-slate-900">{asset.name}</p>
                      <p className="text-[11px] text-slate-500">{asset.tag}</p>
                    </td>
                    <td className="py-3">
                      <p className="text-sm text-slate-900">{assignment.employeeName}</p>
                      <p className="text-[11px] text-slate-500">{assignment.employeeEmail}</p>
                    </td>
                    <td className="py-3 text-sm text-slate-700">{assignment.department}</td>
                    <td className="py-3"><StatusBadge status={asset.status} /></td>
                    <td className="py-3 text-sm text-slate-700">{assignment.assignedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
