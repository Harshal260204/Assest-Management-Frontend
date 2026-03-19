import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const MOCK_USERS = {
  superadmin: { id: 1, name: "Super Admin", role: "superadmin" },
  admin: { id: 2, name: "Organization Admin", role: "admin" },
  user: { id: 3, name: "Inventory User", role: "user" }
};

const ROLE_HOME_MAP = {
  superadmin: "/role-1/dashboard",
  admin: "/role-2/dashboard",
  user: "/other-roles/dashboard"
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(MOCK_USERS.superadmin);

  const loginAsRole = (role) => {
    setUser(MOCK_USERS[role] || MOCK_USERS.user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      role: user?.role || null,
      homePath: user ? ROLE_HOME_MAP[user.role] : "/login",
      loginAsRole,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }
  return context;
}
