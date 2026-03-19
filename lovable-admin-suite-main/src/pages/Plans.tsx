import { Check, Pencil } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    badge: "secondary" as const,
    assetsLimit: "250",
    usersLimit: "5",
    features: ["Basic asset tracking", "Single location", "Email support", "CSV export"],
    orgsCount: 48,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    badge: "default" as const,
    assetsLimit: "5,000",
    usersLimit: "Unlimited",
    features: ["Advanced asset tracking", "Multiple locations", "Priority support", "API access", "Custom fields", "Audit logs", "SSO integration"],
    orgsCount: 76,
  },
];

const Plans = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Plans & Billing</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage subscription plans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.name === "Pro" ? "border-primary/50 shadow-md" : ""}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{plan.name} Plan</CardTitle>
                <Badge variant={plan.badge} className="text-xs">{plan.orgsCount} orgs</Badge>
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Asset Limit</span>
                  <span className="font-medium tabular-nums">{plan.assetsLimit}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Users</span>
                  <span className="font-medium">{plan.usersLimit}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Features</p>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Pencil className="h-4 w-4 mr-1" />
                Edit Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
