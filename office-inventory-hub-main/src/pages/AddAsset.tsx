import { useState } from "react";
import { Link } from "react-router-dom";
import { DateField } from "@/components/app/DateField";
import { PageHeader } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/data/asset-data";

export default function AddAssetPage() {
  const [purchaseDate, setPurchaseDate] = useState<Date>();
  const [warrantyDate, setWarrantyDate] = useState<Date>();

  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Inventory"
        title="Add Asset"
        description="Register a new asset with full purchase and lifecycle details for tracking."
      />

      <Card className="rounded-2xl border-border/70 shadow-sm">
        <CardContent className="space-y-6 p-6">
          <form className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="asset-name">Asset Name</Label>
                <Input id="asset-name" className="h-11 rounded-xl" placeholder="e.g., MacBook Pro 14" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" className="h-11 rounded-xl" placeholder="Apple" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" className="h-11 rounded-xl" placeholder="A2992" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serial">Serial Number</Label>
                <Input id="serial" className="h-11 rounded-xl" placeholder="C02XXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" className="h-11 rounded-xl" placeholder="HQ • 4th Floor" />
              </div>

              <div className="space-y-2">
                <Label>Purchase Date</Label>
                <DateField value={purchaseDate} onChange={setPurchaseDate} placeholder="Select purchase date" />
              </div>
              <div className="space-y-2">
                <Label>Warranty Expiry</Label>
                <DateField value={warrantyDate} onChange={setWarrantyDate} placeholder="Select warranty expiry" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" className="min-h-28 rounded-xl" placeholder="Optional internal notes about condition, accessories, or usage policy." />
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="sticky bottom-4 z-20 flex justify-end gap-3 rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm backdrop-blur">
        <Button asChild variant="outline" className="rounded-xl">
          <Link to="/assets">Cancel</Link>
        </Button>
        <Button className="rounded-xl">Save Asset</Button>
      </div>
    </div>
  );
}
