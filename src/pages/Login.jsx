import { Navigate } from "react-router-dom";
import Button from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { isAuthenticated, loginAsRole, homePath } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={homePath} replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Mock Role Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-slate-600">Select a role to enter the unified app.</p>
          <Button className="w-full" onClick={() => loginAsRole("superadmin")}>
            Continue as Super Admin
          </Button>
          <Button variant="secondary" className="w-full" onClick={() => loginAsRole("admin")}>
            Continue as Admin
          </Button>
          <Button variant="ghost" className="w-full border border-slate-200" onClick={() => loginAsRole("user")}>
            Continue as User
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
