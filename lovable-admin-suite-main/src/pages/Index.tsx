import { Building2, Users, Package, Activity, TrendingUp, UserPlus, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const metrics = [
  { title: "Total Organizations", value: "124", change: "+12%", icon: Building2 },
  { title: "Total Users", value: "1,847", change: "+8%", icon: Users },
  { title: "Total Assets", value: "23,459", change: "+15%", icon: Package },
  { title: "Active / Inactive", value: "118 / 6", change: "95.2%", icon: Activity },
];

const recentActivity = [
  { icon: Building2, text: "New organization \"Acme Corp\" created", time: "2 min ago", color: "text-primary" },
  { icon: UserPlus, text: "User john@techstart.io added to TechStart", time: "15 min ago", color: "text-success" },
  { icon: AlertTriangle, text: "Asset spike detected in GlobalTech (+142)", time: "1 hour ago", color: "text-warning" },
  { icon: Building2, text: "New organization \"Nova Labs\" created", time: "3 hours ago", color: "text-primary" },
  { icon: TrendingUp, text: "Pro plan upgrade by DesignHub", time: "5 hours ago", color: "text-success" },
];

const topOrgs = [
  { name: "GlobalTech Solutions", assets: 1248, plan: "Pro", status: "Active" },
  { name: "Acme Corp", assets: 892, plan: "Pro", status: "Active" },
  { name: "DesignHub", assets: 654, plan: "Pro", status: "Active" },
  { name: "TechStart Inc", assets: 421, plan: "Free", status: "Active" },
  { name: "Nova Labs", assets: 312, plan: "Free", status: "Active" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Platform overview and key metrics</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.title}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{m.title}</p>
                  <p className="text-2xl font-semibold text-foreground mt-1 tabular-nums">{m.value}</p>
                  <p className="text-xs text-success mt-1">{m.change}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-0.5 ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Organizations */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Top Organizations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organization</TableHead>
                  <TableHead className="text-right">Assets</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topOrgs.map((org) => (
                  <TableRow key={org.name}>
                    <TableCell className="font-medium">{org.name}</TableCell>
                    <TableCell className="text-right tabular-nums">{org.assets.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={org.plan === "Pro" ? "default" : "secondary"} className="text-xs">
                        {org.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs text-success border-success/30 bg-success/5">
                        {org.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
