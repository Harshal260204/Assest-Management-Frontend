import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";

export default function RequestsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">Track open hardware/software requests and approval timelines.</p>
      </CardContent>
    </Card>
  );
}
