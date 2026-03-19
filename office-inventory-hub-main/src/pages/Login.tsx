import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-subtle p-4">
      <section className="w-full max-w-md">
        <Card className="rounded-2xl border-border/70 bg-card shadow-elegant">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <LockKeyhole className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-2xl">Company Assets</CardTitle>
              <CardDescription className="mt-1 text-sm">Welcome back. Sign in to continue.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@company.com" className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="h-11 rounded-xl" />
              </div>
              <Button className="h-11 w-full rounded-xl">Login</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
