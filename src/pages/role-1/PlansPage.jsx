import { Check, Pencil } from "lucide-react";
import { plans } from "../../data/superAdminData";

export default function PlansPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-4xl font-semibold text-slate-900">Plans & Billing</h2>
        <p className="text-sm text-slate-500">Manage subscription plans</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border bg-white p-5 shadow-sm ${plan.id === "pro" ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"}`}
          >
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-3xl font-semibold text-slate-900">{plan.name}</h3>
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${plan.id === "pro" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                {plan.orgs}
              </span>
            </div>
            <div className="mb-4 flex items-end gap-1">
              <p className="text-5xl font-bold text-slate-900">{plan.price}</p>
              <p className="pb-1 text-sm text-slate-500">{plan.duration}</p>
            </div>

            <div className="space-y-3 border-t border-slate-100 py-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Asset Limit</span>
                <span className="font-semibold text-slate-900">{plan.limit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Users</span>
                <span className="font-semibold text-slate-900">{plan.users}</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Features</p>
              <div className="space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-emerald-600" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2 text-sm font-medium text-slate-700">
              <Pencil className="h-4 w-4" /> Edit Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
