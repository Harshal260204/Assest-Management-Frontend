import { Pencil, Plus, Trash2 } from "lucide-react";
import { categories } from "../../data/adminData";

export default function CategoriesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Configuration</p>
          <h2 className="text-4xl font-semibold text-slate-900">Categories</h2>
          <p className="text-sm text-slate-500">Maintain standardized category names and codes for clean inventory reporting.</p>
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm">
          <Plus className="h-4 w-4" /> Add Category
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
              <th className="py-2 font-medium">Category Name</th>
              <th className="py-2 font-medium">Code</th>
              <th className="py-2 font-medium">Assets</th>
              <th className="py-2 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-slate-100">
                <td className="py-3 text-sm font-medium text-slate-900">{category.name}</td>
                <td className="py-3 text-sm text-slate-700">{category.code}</td>
                <td className="py-3 text-sm text-slate-700">{category.assetCount}</td>
                <td className="py-3">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="rounded-md border border-slate-200 p-1.5 text-slate-500"><Pencil className="h-3.5 w-3.5" /></button>
                    <button type="button" className="rounded-md border border-slate-200 p-1.5 text-rose-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
