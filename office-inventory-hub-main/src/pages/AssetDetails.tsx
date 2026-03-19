import { Link, useParams } from "react-router-dom";
import { AssetStatusBadge } from "@/components/app/AssetStatusBadge";
import { PageHeader } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { assets, assignments } from "@/data/asset-data";

export default function AssetDetailsPage() {
  const { id } = useParams();
  const asset = assets.find((entry) => entry.id === id) ?? assets[0];
  const history = assignments.filter((entry) => entry.assetId === asset.id);

  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Asset Profile"
        title={asset.name}
        description={`Asset tag ${asset.tag} • Last updated ${asset.lastUpdated}`}
        actions={
          <>
            <Button variant="outline" className="rounded-xl">Edit Asset</Button>
            <Button variant="outline" asChild className="rounded-xl">
              <Link to="/assignments">Assign Asset</Link>
            </Button>
            <Button className="rounded-xl">Update Status</Button>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl border-border/70 shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Core Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Info label="Asset Tag" value={asset.tag} mono />
            <Info label="Category" value={asset.category} />
            <Info label="Brand" value={asset.brand} />
            <Info label="Model" value={asset.model} />
            <Info label="Serial Number" value={asset.serialNumber} mono />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Status</p>
              <AssetStatusBadge status={asset.status} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/70 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Purchase & Warranty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Info label="Purchase Date" value={asset.purchaseDate} />
            <Info label="Warranty Expiry" value={asset.warrantyExpiry} />
            <Info label="Location" value={asset.location} />
            <Info label="Assigned To" value={asset.assignedTo ?? "Unassigned"} />
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-border/70 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Assignment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Assigned Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">{entry.employeeName}</TableCell>
                  <TableCell>{entry.employeeEmail}</TableCell>
                  <TableCell>{entry.department}</TableCell>
                  <TableCell>{entry.assignedDate}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function Info({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className={`mt-1 text-sm text-foreground ${mono ? "font-mono" : "font-medium"}`}>{value}</p>
    </div>
  );
}
