import { Users2 } from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";
import { EmptyState } from "@/components/app/EmptyState";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { currentUser, users } from "@/data/asset-data";

export default function UsersPage() {
  if (currentUser.role !== "Super Admin") {
    return (
      <div className="px-4 py-6 md:px-8">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold">Users</h1>
            <p className="mt-2 text-sm text-muted-foreground">This page is only visible to Super Admin accounts.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Access Control"
        title="Users"
        description="View and manage role-based access for admins and executives."
      />

      <Card className="rounded-2xl border-border/60 shadow-sm">
        <CardContent className="p-5">
          {users.length === 0 ? (
            <EmptyState
              icon={Users2}
              title="No team members yet"
              description="Invite your first team member to start collaborating on asset management."
              actionLabel="Invite Member"
              actionHref="/users"
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-medium">Name</TableHead>
                  <TableHead className="text-xs font-medium">Email</TableHead>
                  <TableHead className="text-xs font-medium">Department</TableHead>
                  <TableHead className="text-xs font-medium">Role</TableHead>
                  <TableHead className="text-xs font-medium">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-accent/40 transition-colors">
                    <TableCell className="text-sm font-medium">{user.name}</TableCell>
                    <TableCell className="text-sm">{user.email}</TableCell>
                    <TableCell className="text-sm">{user.department}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "Super Admin" ? "default" : "secondary"} className="rounded-full text-[10px]">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{user.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
