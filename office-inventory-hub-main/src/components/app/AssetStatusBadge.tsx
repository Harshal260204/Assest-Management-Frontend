import { Badge } from "@/components/ui/badge";
import { AssetStatus } from "@/types/assets";
import { cn } from "@/lib/utils";

const statusStyles: Record<AssetStatus, string> = {
  Available: "border-status-available/20 bg-status-available-bg text-status-available",
  Assigned: "border-status-assigned/20 bg-status-assigned-bg text-status-assigned",
  "In Repair": "border-status-repair/20 bg-status-repair-bg text-status-repair",
  Disposed: "border-status-disposed/20 bg-status-disposed-bg text-status-disposed",
};

export function AssetStatusBadge({ status, className }: { status: AssetStatus; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </Badge>
  );
}
