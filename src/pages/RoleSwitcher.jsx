import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";

export default function RoleSwitcher() {
  const { role, loginAsRole } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{role}</span>
      <Button variant="secondary" className="px-2 py-1 text-xs" onClick={() => loginAsRole("superadmin")}>
        SuperAdmin
      </Button>
      <Button variant="secondary" className="px-2 py-1 text-xs" onClick={() => loginAsRole("admin")}>
        Admin
      </Button>
      <Button variant="secondary" className="px-2 py-1 text-xs" onClick={() => loginAsRole("user")}>
        User
      </Button>
    </div>
  );
}
