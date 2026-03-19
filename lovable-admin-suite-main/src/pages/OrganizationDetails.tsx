import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Users, Package, CreditCard, Ban, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const orgData: Record<string, any> = {
  "1": {
    name: "GlobalTech Solutions", plan: "Pro", email: "admin@globaltech.com", created: "Jan 12, 2024",
    totalAssets: 1248, totalUsers: 32, assetsLimit: 5000,
    users: [
      { name: "John Smith", email: "john@globaltech.com", role: "Admin", status: "Active" },
      { name: "Sarah Lee", email: "sarah@globaltech.com", role: "Manager", status: "Active" },
      { name: "Mike Chen", email: "mike@globaltech.com", role: "User", status: "Active" },
      { name: "Lisa Wang", email: "lisa@globaltech.com", role: "User", status: "Inactive" },
    ],
    assets: [
      { tag: "GT-001", name: "MacBook Pro 16\"", category: "Laptops", status: "Assigned" },
      { tag: "GT-002", name: "Dell Monitor 27\"", category: "Monitors", status: "Available" },
      { tag: "GT-003", name: "Logitech MX Keys", category: "Peripherals", status: "Assigned" },
    ],
    activity: [
      { text: "New user Sarah Lee added", time: "2 hours ago" },
      { text: "Asset GT-045 assigned to Mike Chen", time: "5 hours ago" },
      { text: "Plan upgraded from Free to Pro", time: "2 days ago" },
      { text: "50 new assets imported via CSV", time: "3 days ago" },
    ],
  },
};

// Fallback for any id
const getOrg = (id: string) => orgData[id] || orgData["1"];

const OrganizationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const org = getOrg(id || "1");

  const summaryCards = [
    { title: "Total Assets", value: org.totalAssets.toLocaleString(), icon: Package },
    { title: "Total Users", value: org.totalUsers, icon: Users },
    { title: "Assets Limit", value: org.assetsLimit.toLocaleString(), icon: Package },
    { title: "Plan", value: org.plan, icon: CreditCard },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate("/organizations")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-foreground">{org.name}</h1>
              <Badge variant="default" className="text-xs">{org.plan}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{org.email} · Created {org.created}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ArrowUpDown className="h-4 w-4 mr-1" />
            Change Plan
          </Button>
          <Button variant="destructive" size="sm">
            <Ban className="h-4 w-4 mr-1" />
            Suspend
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((c) => (
          <Card key={c.title}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{c.title}</p>
                  <p className="text-2xl font-semibold text-foreground mt-1 tabular-nums">{c.value}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Users</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {org.users.map((u: any) => (
                  <TableRow key={u.email}>
                    <TableCell>
                      <p className="font-medium text-sm">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </TableCell>
                    <TableCell><Badge variant="secondary" className="text-xs">{u.role}</Badge></TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs ${u.status === "Active" ? "text-success border-success/30 bg-success/5" : "text-muted-foreground"}`}>
                        {u.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Assets */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Assets</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tag</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {org.assets.map((a: any) => (
                  <TableRow key={a.tag}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{a.tag}</TableCell>
                    <TableCell>
                      <p className="font-medium text-sm">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.category}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs ${a.status === "Assigned" ? "text-primary border-primary/30 bg-primary/5" : "text-success border-success/30 bg-success/5"}`}>
                        {a.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Activity Log */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {org.activity.map((a: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-foreground flex-1">{a.text}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationDetails;
