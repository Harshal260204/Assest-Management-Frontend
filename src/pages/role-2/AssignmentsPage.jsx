import StatusBadge from "../../components/admin/StatusBadge";
import { assets, assignments } from "../../data/adminData";

export default function AssignmentsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Management</p>
        <h2 className="text-4xl font-semibold text-slate-900">Assignments</h2>
        <p className="text-sm text-slate-500">Track who currently holds each asset and assignment history.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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
                  <td className="py-3 text-sm font-medium text-slate-900">{asset.name}</td>
                  <td className="py-3 text-sm text-slate-700">{assignment.employeeName}</td>
                  <td className="py-3 text-sm text-slate-700">{assignment.department}</td>
                  <td className="py-3"><StatusBadge status={asset.status} /></td>
                  <td className="py-3 text-sm text-slate-700">{assignment.assignedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
