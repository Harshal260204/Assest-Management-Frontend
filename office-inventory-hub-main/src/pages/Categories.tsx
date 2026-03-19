import { Pencil, Plus, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { categories } from "@/data/asset-data";

export default function CategoriesPage() {
  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Configuration"
        title="Categories"
        description="Maintain standardized category names and codes for clean inventory reporting."
        actions={
          <Button className="rounded-xl">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        }
      />

      <Card className="rounded-2xl border-border/70 shadow-sm">
        <CardContent className="p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Assets</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.code}</TableCell>
                  <TableCell>{category.assetCount}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg text-destructive hover:text-destructive">
                        <Trash2 className="h-3.5 w-3.5" />
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
}
