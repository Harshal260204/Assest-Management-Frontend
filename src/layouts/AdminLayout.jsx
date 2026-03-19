import { Bell, Boxes, ClipboardList, LayoutDashboard, PackagePlus, Tags, Users } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { currentUser, stats } from "../data/adminData";

const NAV = [
  { section: "Overview", items: [{ label: "Dashboard", to: "/role-2/dashboard", icon: LayoutDashboard }] },
  {
    section: "Management",
    items: [
      { label: "Assets", to: "/role-2/assets", icon: Boxes },
      { label: "Assignments", to: "/role-2/assignments", icon: ClipboardList },
      { label: "Categories", to: "/role-2/categories", icon: Tags },
      { label: "Add Asset", to: "/role-2/assets/new", icon: PackagePlus }
    ]
  },
  { section: "Team", items: [{ label: "Users", to: "/role-2/users", icon: Users }] }
];

export default function AdminLayout() {
  const usagePercent = Math.round((stats.totalAssets / 250) * 100);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <aside className="w-64 border-r border-slate-200 bg-white">
        <div className="px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Boxes className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">AssetDesk</p>
              <p className="text-[11px] text-slate-500">Asset management</p>
            </div>
          </div>
        </div>
        <nav className="space-y-5 px-3">
          {NAV.map((group) => (
            <div key={group.section}>
              <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{group.section}</p>
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
        <div className="mt-5 px-3">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Free Plan</p>
              <button type="button" className="rounded-lg bg-blue-600 px-2 py-1 text-[11px] font-semibold text-white">
                Upgrade
              </button>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white">
              <div className={`h-1.5 rounded-full bg-amber-400 ${usagePercent >= 90 ? "w-[99%]" : "w-3/4"}`} />
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-900">{stats.totalAssets}</span> / 250 assets used
            </p>
            <p className="text-[10px] font-medium text-amber-600">You're close to your limit</p>
          </div>
        </div>
        <div className="mt-3 px-3 pb-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
                <p className="text-[11px] text-slate-500">{currentUser.email}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-slate-600">
                {currentUser.role}
              </span>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-medium text-slate-800">TechNova Pvt Ltd</h1>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100">
              <Bell className="h-4 w-4" />
            </button>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
              <p className="text-[11px] text-slate-500">{currentUser.department}</p>
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
