import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RoleSwitcher from "../pages/RoleSwitcher";

const USER_LINKS = [
  { label: "Dashboard", to: "/other-roles/dashboard" },
  { label: "Requests", to: "/other-roles/requests" }
];

export default function UserLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar title="User Panel" links={USER_LINKS} />
      <main className="flex-1">
        <header className="border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-slate-900">Employee Portal</h1>
            <RoleSwitcher />
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
