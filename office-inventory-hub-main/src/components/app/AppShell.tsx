import { Bell, Boxes, Building2, ChevronDown, FolderKanban, LayoutDashboard, PackagePlus, Tags, Users2, Zap } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { currentUser, stats } from "@/data/asset-data";
import { cn } from "@/lib/utils";

const overviewItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
];

const managementItems = [
  { title: "Assets", url: "/assets", icon: Boxes },
  { title: "Assignments", url: "/assignments", icon: FolderKanban },
  { title: "Categories", url: "/categories", icon: Tags },
  { title: "Add Asset", url: "/assets/new", icon: PackagePlus },
];

const teamItems = [
  ...(currentUser.role === "Super Admin" ? [{ title: "Users", url: "/users", icon: Users2 }] : []),
];

function SidebarNavGroup({ label, items: navItems }: { label: string; items: { title: string; url: string; icon: any }[] }) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  if (navItems.length === 0) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                  <NavLink
                    to={item.url}
                    end={item.url === "/"}
                    className="text-sidebar-foreground/70 transition-colors"
                    activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const assetUsage = stats.totalAssets;
  const assetLimit = 250;
  const usagePercent = Math.round((assetUsage / assetLimit) * 100);

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar/95">
      <SidebarHeader className="gap-4 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
            <Boxes className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-sidebar-foreground">AssetDesk</p>
              <p className="truncate text-[11px] text-muted-foreground">Asset management</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarNavGroup label="Overview" items={overviewItems} />
        <SidebarNavGroup label="Management" items={managementItems} />
        <SidebarNavGroup label="Team" items={teamItems} />
      </SidebarContent>

      <SidebarFooter className="space-y-3 px-3 pb-4 pt-2">
        {/* Plan / Usage Indicator */}
        {!collapsed && (
          <div className={cn(
            "rounded-xl border p-3 transition-colors",
            usagePercent >= 80
              ? "border-[hsl(var(--warning))]/30 bg-[hsl(var(--warning))]/5"
              : "border-sidebar-border bg-muted/50"
          )}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Free Plan</span>
              <Button
                variant={usagePercent >= 80 ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "h-6 rounded-lg px-2.5 text-[11px] font-semibold",
                  usagePercent >= 80
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-primary hover:text-primary/80"
                )}
              >
                <Zap className="mr-1 h-3 w-3" /> Upgrade
              </Button>
            </div>
            <div className="mt-2.5 space-y-1.5">
              <Progress
                value={usagePercent}
                className={cn("h-1.5", usagePercent >= 80 && "[&>div]:bg-[hsl(var(--warning))]")}
              />
              <p className="text-[11px] text-muted-foreground">
                <span className="font-medium text-foreground">{assetUsage}</span> / {assetLimit} assets used
              </p>
              {usagePercent >= 80 && (
                <p className="text-[10px] font-medium text-[hsl(var(--warning))]">You're close to your limit</p>
              )}
            </div>
          </div>
        )}

        {/* User card */}
        <div className="rounded-xl border border-sidebar-border bg-card/80 p-3 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div className={cn("min-w-0", collapsed && "hidden")}>
              <p className="truncate text-sm font-medium text-foreground">{currentUser.name}</p>
              <p className="truncate text-[11px] text-muted-foreground">{currentUser.email}</p>
            </div>
            <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em]">
              {currentUser.role}
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default function AppShell() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="bg-background">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border/60 bg-background/90 px-4 backdrop-blur-sm md:px-8">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="h-8 w-8 rounded-lg border border-border/80 bg-card hover:bg-accent/60" />
              <div className="hidden items-center gap-1.5 sm:flex">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">TechNova Pvt Ltd</span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
                <p className="text-[11px] text-muted-foreground">{currentUser.department}</p>
              </div>
            </div>
          </header>
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
