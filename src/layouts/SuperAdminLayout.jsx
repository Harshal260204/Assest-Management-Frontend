import { Bell, Building2, LayoutDashboard, Search, Shield, Users } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { superAdminProfile } from "../data/superAdminData";

const NAV = [
  { section: "Overview", items: [{ label: "Dashboard", to: "/role-1/dashboard", icon: LayoutDashboard }] },
  {
    section: "Management",
    items: [
      { label: "Organizations", to: "/role-1/organizations", icon: Building2 },
      { label: "Users", to: "/role-1/users", icon: Users }
    ]
  },
  { section: "Billing", items: [{ label: "Plans", to: "/role-1/plans", icon: Shield }] }
];

export default function SuperAdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <aside className="w-64 border-r border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">AssetDesk</p>
              <p className="text-[11px] text-slate-500">Super Admin</p>
            </div>
          </div>
        </div>
        <nav className="space-y-7 px-3 py-5">
          {NAV.map((group) => (
            <div key={group.section}>
              <p className="mb-2 px-2 text-[12px] text-slate-400">{group.section}</p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-4 w-64 px-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                {superAdminProfile.short}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{superAdminProfile.name}</p>
                <p className="text-[11px] text-slate-500">{superAdminProfile.role}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-slate-500" />
            <p className="text-sm font-semibold text-slate-900">Super Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="h-9 w-52 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm" placeholder="Search..." />
            </div>
            <button type="button" className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100">
              <Bell className="h-4 w-4" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
              SA
            </div>
          </div>
        </header>
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
