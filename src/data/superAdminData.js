export const superAdminProfile = {
  name: "Admin User",
  short: "SA",
  role: "SUPER ADMIN"
};

export const superAdminStats = [
  { label: "Total Organizations", value: "124", change: "+12%" },
  { label: "Total Users", value: "1,847", change: "+8%" },
  { label: "Total Assets", value: "23,459", change: "+15%" },
  { label: "Active / Inactive", value: "118 / 6", change: "95.2%" }
];

export const recentActivity = [
  { id: 1, text: 'New organization "Acme Corp" created', time: "2 min ago" },
  { id: 2, text: "User john@techstart.io added to TechStart", time: "15 min ago" },
  { id: 3, text: "Asset spike detected in GlobalTech (+142)", time: "1 hour ago" },
  { id: 4, text: 'New organization "Nova Labs" created', time: "3 hours ago" },
  { id: 5, text: "Pro plan upgrade by DesignHub", time: "5 hours ago" }
];

export const organizations = [
  { id: 1, name: "GlobalTech Solutions", assets: "1,248", plan: "Pro", status: "Active" },
  { id: 2, name: "Acme Corp", assets: "892", plan: "Pro", status: "Active" },
  { id: 3, name: "DesignHub", assets: "654", plan: "Pro", status: "Active" },
  { id: 4, name: "TechStart Inc", assets: "421", plan: "Free", status: "Active" },
  { id: 5, name: "Nova Labs", assets: "312", plan: "Free", status: "Active" }
];

export const superAdminUsers = [
  { id: 1, name: "John Smith", email: "john@globaltech.com", org: "GlobalTech Solutions", role: "Admin", status: "Active" },
  { id: 2, name: "Sarah Lee", email: "sarah@globaltech.com", org: "GlobalTech Solutions", role: "Manager", status: "Active" },
  { id: 3, name: "Mike Chen", email: "mike@acme.com", org: "Acme Corp", role: "Admin", status: "Active" },
  { id: 4, name: "Lisa Wang", email: "lisa@designhub.io", org: "DesignHub", role: "User", status: "Active" },
  { id: 5, name: "Tom Baker", email: "tom@techstart.io", org: "TechStart Inc", role: "Admin", status: "Active" },
  { id: 6, name: "Emma Davis", email: "emma@novalabs.co", org: "Nova Labs", role: "Manager", status: "Inactive" },
  { id: 7, name: "James Wilson", email: "james@dataflow.com", org: "DataFlow Inc", role: "User", status: "Active" },
  { id: 8, name: "Anna Kim", email: "anna@cloudbase.io", org: "CloudBase", role: "Admin", status: "Active" },
  { id: 9, name: "Robert Brown", email: "rob@pixelforge.co", org: "PixelForge", role: "User", status: "Inactive" }
];

export const plans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    duration: "/forever",
    orgs: "48 orgs",
    limit: "250",
    users: "5",
    features: ["Basic asset tracking", "Single location", "Email support", "CSV export"]
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$29",
    duration: "/per month",
    orgs: "76 orgs",
    limit: "5,000",
    users: "Unlimited",
    features: ["Advanced asset tracking", "Multiple locations", "Priority support", "API access", "Custom fields", "Audit logs", "SSO integration"]
  }
];
