import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";
import SuperAdminLayout from "../layouts/SuperAdminLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SuperAdminDashboard from "../pages/role-1/SuperAdminDashboard";
import OrganizationsPage from "../pages/role-1/OrganizationsPage";
import SuperAdminUsersPage from "../pages/role-1/SuperAdminUsersPage";
import PlansPage from "../pages/role-1/PlansPage";
import AdminDashboard from "../pages/role-2/AdminDashboard";
import AssetsPage from "../pages/role-2/AssetsPage";
import AssignmentsPage from "../pages/role-2/AssignmentsPage";
import CategoriesPage from "../pages/role-2/CategoriesPage";
import AddAssetPage from "../pages/role-2/AddAssetPage";
import UsersPage from "../pages/role-2/UsersPage";
import UserDashboard from "../pages/other-roles/UserDashboard";
import RequestsPage from "../pages/other-roles/RequestsPage";

function RoleRedirect() {
  const { homePath, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Navigate to={homePath} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RoleRedirect />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
        <Route path="/role-1" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="organizations" element={<OrganizationsPage />} />
          <Route path="users" element={<SuperAdminUsersPage />} />
          <Route path="plans" element={<PlansPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/role-2" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="assets" element={<AssetsPage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="assets/new" element={<AddAssetPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route path="/other-roles" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="requests" element={<RequestsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
