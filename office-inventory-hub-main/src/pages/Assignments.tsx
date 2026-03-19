import { useState } from "react";
import { DateField } from "@/components/app/DateField";
import { PageHeader } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const departments = ["HR", "Operations", "Engineering", "Finance", "Design"];

export default function AssignmentsPage() {
  const [assignedDate, setAssignedDate] = useState<Date>();

  return (
    <div className="space-y-6 px-4 py-6 md:px-8">
      <PageHeader
        eyebrow="Allocation"
        title="Assign Asset"
        description="Assign assets to employees and keep assignment notes for audit visibility."
      />

      <Card className="rounded-2xl border-border/70 shadow-sm">
        <CardContent className="p-6">
          <form
            className="grid gap-5 md:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              toast({ title: "Asset assigned", description: "The assignment has been recorded successfully." });
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="employee-name">Employee Name</Label>
              <Input id="employee-name" className="h-11 rounded-xl" placeholder="Maya Jordan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employee-email">Employee Email</Label>
              <Input id="employee-email" type="email" className="h-11 rounded-xl" placeholder="maya@company.com" />
            </div>

            <div className="space-y-2">
              <Label>Department</Label>
              <Select>
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((department) => (
                    <SelectItem key={department} value={department}>
                      {department}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Assigned Date</Label>
              <DateField value={assignedDate} onChange={setAssignedDate} placeholder="Select assigned date" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" className="min-h-28 rounded-xl" placeholder="Any handover notes, accessories, or special requirements." />
            </div>

            <div className="md:col-span-2 flex justify-end gap-3">
              <Button type="button" variant="outline" className="rounded-xl">Cancel</Button>
              <Button type="submit" className="rounded-xl">Assign Asset</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
