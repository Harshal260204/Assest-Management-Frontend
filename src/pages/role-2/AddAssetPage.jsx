export default function AddAssetPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Inventory</p>
        <h2 className="text-4xl font-semibold text-slate-900">Add Asset</h2>
        <p className="text-sm text-slate-500">Register a new asset with full purchase and lifecycle details for tracking.</p>
      </div>

      <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Asset Name" placeholder="e.g., MacBook Pro 14" />
          <SelectField label="Category" placeholder="Select category" />
          <Field label="Brand" placeholder="Apple" />
          <Field label="Model" placeholder="A2992" />
          <Field label="Serial Number" placeholder="C02XXXXX" />
          <Field label="Location" placeholder="HQ • 4th Floor" />
          <Field label="Purchase Date" placeholder="Select purchase date" />
          <Field label="Warranty Expiry" placeholder="Select warranty expiry" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Notes</label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-300"
            placeholder="Optional internal notes about condition, accessories, or usage policy."
          />
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
          <button type="button" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">Cancel</button>
          <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">Save Asset</button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-300"
      />
    </div>
  );
}

function SelectField({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 outline-none focus:border-blue-300">
        <option>{placeholder}</option>
      </select>
    </div>
  );
}
