const STYLES = {
  Assigned: "bg-blue-50 text-blue-700 border-blue-100",
  Available: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "In Repair": "bg-amber-50 text-amber-700 border-amber-100",
  Disposed: "bg-rose-50 text-rose-700 border-rose-100"
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STYLES[status] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
      {status}
    </span>
  );
}
