import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const usersData = [
  { name: "John Smith", email: "john@globaltech.com", org: "GlobalTech Solutions", role: "Admin", status: "Active" },
  { name: "Sarah Lee", email: "sarah@globaltech.com", org: "GlobalTech Solutions", role: "Manager", status: "Active" },
  { name: "Mike Chen", email: "mike@acme.com", org: "Acme Corp", role: "Admin", status: "Active" },
  { name: "Lisa Wang", email: "lisa@designhub.io", org: "DesignHub", role: "User", status: "Active" },
  { name: "Tom Baker", email: "tom@techstart.io", org: "TechStart Inc", role: "Admin", status: "Active" },
  { name: "Emma Davis", email: "emma@novalabs.co", org: "Nova Labs", role: "Manager", status: "Inactive" },
  { name: "James Wilson", email: "james@dataflow.com", org: "DataFlow Inc", role: "User", status: "Active" },
  { name: "Anna Kim", email: "anna@cloudbase.io", org: "CloudBase", role: "Admin", status: "Active" },
  { name: "Robert Brown", email: "rob@pixelforge.co", org: "PixelForge", role: "User", status: "Inactive" },
];

const orgs = ["GlobalTech Solutions", "Acme Corp", "DesignHub", "TechStart Inc", "Nova Labs", "DataFlow Inc", "CloudBase", "PixelForge"];

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [orgFilter, setOrgFilter] = useState("all");

  const filtered = usersData.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchOrg = orgFilter === "all" || u.org === orgFilter;
    return matchSearch && matchOrg;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Users</h1>
        <p className="text-sm text-muted-foreground mt-1">All users across organizations</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-9 h-9 text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={orgFilter} onValueChange={setOrgFilter}>
              <SelectTrigger className="w-[200px] h-9 text-sm">
                <SelectValue placeholder="Organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Organizations</SelectItem>
                {orgs.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.email}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-muted-foreground">{u.email}</TableCell>
                  <TableCell className="text-sm">{u.org}</TableCell>
                  <TableCell>
                    <Badge variant={u.role === "Admin" ? "default" : "secondary"} className="text-xs">{u.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${u.status === "Active" ? "text-success border-success/30 bg-success/5" : "text-muted-foreground"}`}>
                      {u.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
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

export default UsersPage;
