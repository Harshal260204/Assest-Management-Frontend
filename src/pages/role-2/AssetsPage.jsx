import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "../../components/admin/StatusBadge";
import { assets } from "../../data/adminData";

export default function AssetsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Inventory</p>
          <h2 className="text-4xl font-semibold text-slate-900">Assets</h2>
          <p className="text-sm text-slate-500">Search and manage all physical and digital office assets from one table.</p>
        </div>
        <Link to="/role-2/assets/new" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          + Add Asset
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search asset tag, name, assignee, or location"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-blue-300"
            />
          </div>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
            <option>All</option>
          </select>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
            <option>All</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
              <th className="py-2 font-medium">Asset Tag</th>
              <th className="py-2 font-medium">Asset Name</th>
              <th className="py-2 font-medium">Category</th>
              <th className="py-2 font-medium">Status</th>
              <th className="py-2 font-medium">Assigned To</th>
              <th className="py-2 font-medium">Location</th>
              <th className="py-2 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-slate-100">
                <td className="py-3 text-xs text-slate-600">{asset.tag}</td>
                <td className="py-3 text-sm font-medium text-slate-900">{asset.name}</td>
                <td className="py-3 text-sm text-slate-700">{asset.category}</td>
                <td className="py-3"><StatusBadge status={asset.status} /></td>
                <td className="py-3 text-sm text-slate-700">{asset.assignedTo}</td>
                <td className="py-3 text-sm text-slate-500">{asset.location}</td>
                <td className="py-3 text-right text-sm text-slate-600">View</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <p>Showing 6 of 6 assets</p>
          <div className="space-x-2">
            <button type="button" className="rounded-md border border-slate-200 px-3 py-1 text-xs">Previous</button>
            <button type="button" className="rounded-md border border-slate-200 px-3 py-1 text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
