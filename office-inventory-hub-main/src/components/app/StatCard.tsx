import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatCard({ label, value, note, icon: Icon }: { label: string; value: string | number; note: string; icon: LucideIcon }) {
  return (
    <Card className="rounded-2xl border-border/40 bg-card shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04),0_6px_24px_-4px_hsl(var(--foreground)/0.08)] transition-all duration-200 hover:shadow-[0_2px_6px_0_hsl(var(--foreground)/0.06),0_10px_32px_-6px_hsl(var(--foreground)/0.12)] hover:-translate-y-0.5">
      <CardContent className="flex items-start justify-between p-5">
        <div className="space-y-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
          <div className="space-y-0.5">
            <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{note}</p>
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </div>
      </CardContent>
    </Card>
  );
}
