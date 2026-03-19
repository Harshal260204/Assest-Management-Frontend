import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Eye, Ban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const orgsData = [
  { id: "1", name: "GlobalTech Solutions", email: "admin@globaltech.com", plan: "Pro", assetsUsed: 1248, assetsLimit: 5000, status: "Active", created: "Jan 12, 2024" },
  { id: "2", name: "Acme Corp", email: "admin@acme.com", plan: "Pro", assetsUsed: 892, assetsLimit: 5000, status: "Active", created: "Feb 3, 2024" },
  { id: "3", name: "DesignHub", email: "hello@designhub.io", plan: "Pro", assetsUsed: 654, assetsLimit: 5000, status: "Active", created: "Mar 15, 2024" },
  { id: "4", name: "TechStart Inc", email: "ops@techstart.io", plan: "Free", assetsUsed: 248, assetsLimit: 250, status: "Active", created: "Apr 22, 2024" },
  { id: "5", name: "Nova Labs", email: "admin@novalabs.co", plan: "Free", assetsUsed: 180, assetsLimit: 250, status: "Active", created: "May 8, 2024" },
  { id: "6", name: "DataFlow Inc", email: "admin@dataflow.com", plan: "Pro", assetsUsed: 3200, assetsLimit: 5000, status: "Suspended", created: "Jun 1, 2024" },
  { id: "7", name: "CloudBase", email: "support@cloudbase.io", plan: "Free", assetsUsed: 120, assetsLimit: 250, status: "Active", created: "Jul 19, 2024" },
  { id: "8", name: "PixelForge", email: "admin@pixelforge.co", plan: "Pro", assetsUsed: 2100, assetsLimit: 5000, status: "Suspended", created: "Aug 5, 2024" },
];

const Organizations = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = orgsData.filter((o) => {
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.email.toLowerCase().includes(search.toLowerCase());
    const matchPlan = planFilter === "all" || o.plan === planFilter;
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchPlan && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Organizations</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage all organizations on the platform</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Add Organization
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search organizations..." className="pl-9 h-9 text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-[140px] h-9 text-sm">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Free">Free</SelectItem>
                <SelectItem value="Pro">Pro</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px] h-9 text-sm">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Admin Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Assets Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((org) => (
                <TableRow key={org.id}>
                  <TableCell className="font-medium">{org.name}</TableCell>
                  <TableCell className="text-muted-foreground">{org.email}</TableCell>
                  <TableCell>
                    <Badge variant={org.plan === "Pro" ? "default" : "secondary"} className="text-xs">{org.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <span className="text-xs tabular-nums text-muted-foreground">{org.assetsUsed.toLocaleString()} / {org.assetsLimit.toLocaleString()}</span>
                      <Progress value={(org.assetsUsed / org.assetsLimit) * 100} className="h-1.5" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${org.status === "Active" ? "text-success border-success/30 bg-success/5" : "text-destructive border-destructive/30 bg-destructive/5"}`}>
                      {org.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm tabular-nums">{org.created}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate(`/organizations/${org.id}`)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                        <Ban className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Organizations;
