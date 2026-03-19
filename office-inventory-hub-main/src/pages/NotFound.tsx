import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="mb-3 text-5xl font-semibold">404</h1>
        <p className="mb-6 text-sm text-muted-foreground">The page you requested could not be found.</p>
        <Button asChild className="rounded-xl">
          <Link to="/">Return to dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
