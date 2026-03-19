import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";

export default function UserDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">
          View assigned assets, request replacements, and track approval status from one place.
        </p>
      </CardContent>
    </Card>
  );
}
