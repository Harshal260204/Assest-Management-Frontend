import { Boxes, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AssetStatusBadge } from "@/components/app/AssetStatusBadge";
import { EmptyState } from "@/components/app/EmptyState";
import { PageHeader } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { assets } from "@/data/asset-data";
import { AssetStatus } from "@/types/assets";

const statusFilters: ("All" | AssetStatus)[] = ["All", "Available", "Assigned", "In Repair", "Disposed"];

export default function AssetsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<("All" | AssetStatus)>("All");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => ["All", ...new Set(assets.map((asset) => asset.category))], []);

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch = `${asset.tag} ${asset.name} ${asset.location} ${asset.assignedTo ?? ""}`
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesStatus = status === "All" || asset.status === status;
    const matchesCategory = category === "All" || asset.category === category;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Inventory"
        title="Assets"
        description="Search and manage all physical and digital office assets from one table."
        actions={
          <Button asChild className="rounded-xl shadow-sm">
            <Link to="/assets/new">+ Add Asset</Link>
          </Button>
        }
      />

      <Card className="rounded-2xl border-border/60 shadow-sm">
        <CardContent className="space-y-4 p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search asset tag, name, assignee, or location"
                className="h-10 rounded-xl pl-9"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Select value={status} onValueChange={(value) => setStatus(value as "All" | AssetStatus)}>
                <SelectTrigger className="h-10 w-full rounded-xl sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusFilters.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-10 w-full rounded-xl sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredAssets.length === 0 ? (
            <EmptyState
              icon={Boxes}
              title="No assets found"
              description="Create your first asset to start tracking your office inventory."
              actionLabel="+ Add Asset"
              actionHref="/assets/new"
            />
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-xs font-medium">Asset Tag</TableHead>
                    <TableHead className="text-xs font-medium">Asset Name</TableHead>
                    <TableHead className="text-xs font-medium">Category</TableHead>
                    <TableHead className="text-xs font-medium">Status</TableHead>
                    <TableHead className="text-xs font-medium">Assigned To</TableHead>
                    <TableHead className="text-xs font-medium">Location</TableHead>
                    <TableHead className="text-right text-xs font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssets.map((asset) => (
                    <TableRow key={asset.id} className="hover:bg-accent/40 transition-colors">
                      <TableCell>
                        <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-foreground">{asset.tag}</span>
                      </TableCell>
                      <TableCell className="text-sm font-medium">{asset.name}</TableCell>
                      <TableCell className="text-sm">{asset.category}</TableCell>
                      <TableCell>
                        <AssetStatusBadge status={asset.status} />
                      </TableCell>
                      <TableCell className="text-sm">{asset.assignedTo ?? "—"}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{asset.location}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" asChild className="h-7 rounded-lg px-2.5 text-xs text-muted-foreground hover:text-foreground">
                          <Link to={`/assets/${asset.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between pt-1 text-sm text-muted-foreground">
                <p>
                  Showing <span className="font-medium text-foreground">{filteredAssets.length}</span> of {assets.length} assets
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="rounded-lg text-xs">Previous</Button>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs">Next</Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
