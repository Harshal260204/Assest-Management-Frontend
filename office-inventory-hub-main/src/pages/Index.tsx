import { Activity, AlertTriangle, Boxes, CircleCheckBig, PackageX, ShieldAlert, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/app/PageHeader";
import { StatCard } from "@/components/app/StatCard";
import { AssetStatusBadge } from "@/components/app/AssetStatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { assets, assignments, stats } from "@/data/asset-data";

const statItems = [
  { label: "Total Assets", value: stats.totalAssets, note: "All tracked items", icon: Boxes },
  { label: "Assigned", value: stats.assigned, note: "In employee use", icon: Activity },
  { label: "Available", value: stats.available, note: "Ready to assign", icon: CircleCheckBig },
  { label: "In Repair", value: stats.inRepair, note: "Under maintenance", icon: ShieldAlert },
  { label: "Disposed", value: stats.disposed, note: "Retired inventory", icon: Trash2 },
];

const assetsInRepair = assets.filter((a) => a.status === "In Repair");
const unassignedAssets = assets.filter((a) => a.status === "Available");

const Index = () => {
  return (
    <div className="space-y-8 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Monitor asset lifecycle, track active allocations, and keep operational inventory clean."
        actions={
          <Button asChild className="rounded-xl shadow-sm">
            <Link to="/assets/new">+ Add Asset</Link>
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {statItems.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      {/* Action Required */}
      {(assetsInRepair.length > 0 || unassignedAssets.length > 0) && (
        <section className="grid gap-4 md:grid-cols-2">
          {assetsInRepair.length > 0 && (
            <Card className="rounded-2xl border-status-repair/20 bg-status-repair-bg/50 shadow-sm">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-status-repair/10">
                  <AlertTriangle className="h-5 w-5 text-status-repair" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{assetsInRepair.length} asset{assetsInRepair.length > 1 ? "s" : ""} in repair</p>
                  <p className="text-xs text-muted-foreground">Review and update maintenance status</p>
                </div>
                <Button variant="outline" size="sm" asChild className="shrink-0 rounded-lg border-status-repair/30 text-xs hover:bg-status-repair/10">
                  <Link to="/assets">Review</Link>
                </Button>
              </CardContent>
            </Card>
          )}
          {unassignedAssets.length > 0 && (
            <Card className="rounded-2xl border-primary/15 bg-accent/50 shadow-sm">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <PackageX className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{unassignedAssets.length} unassigned asset{unassignedAssets.length > 1 ? "s" : ""}</p>
                  <p className="text-xs text-muted-foreground">Available assets waiting to be assigned</p>
                </div>
                <Button variant="outline" size="sm" asChild className="shrink-0 rounded-lg text-xs">
                  <Link to="/assets">Assign</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </section>
      )}

      <Card className="rounded-2xl border-border/60 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-base font-semibold">Recent Asset Assignments</CardTitle>
          <Button variant="ghost" asChild className="h-8 rounded-lg px-3 text-xs text-muted-foreground">
            <Link to="/assignments">View all →</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs font-medium">Asset</TableHead>
                <TableHead className="text-xs font-medium">Employee</TableHead>
                <TableHead className="text-xs font-medium">Department</TableHead>
                <TableHead className="text-xs font-medium">Status</TableHead>
                <TableHead className="text-xs font-medium">Assigned Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.slice(0, 6).map((assignment) => {
                const asset = assets.find((entry) => entry.id === assignment.assetId);
                if (!asset) return null;

                return (
                  <TableRow key={assignment.id} className="hover:bg-accent/40">
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium text-foreground">{asset.name}</p>
                        <p className="font-mono text-[11px] text-muted-foreground">{asset.tag}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium text-foreground">{assignment.employeeName}</p>
                        <p className="text-[11px] text-muted-foreground">{assignment.employeeEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{assignment.department}</TableCell>
                    <TableCell>
                      <AssetStatusBadge status={asset.status} />
                    </TableCell>
                    <TableCell className="text-sm">{assignment.assignedDate}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
