import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, BedDouble, Image, MessageSquare, Star, Settings, ExternalLink, Bird } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/rooms", label: "Rooms", icon: BedDouble },
  { to: "/admin/gallery", label: "Gallery", icon: Image },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  { to: "/admin/testimonials", label: "Testimonials", icon: Star },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

function SidebarContent({ onNav }: { onNav?: () => void }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex h-full flex-col">
      <Link to="/admin" onClick={onNav} className="flex items-center gap-2 border-b px-6 py-5">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground"><Bird className="size-5" /></span>
        <span className="font-display text-lg">Woodpecker Admin</span>
      </Link>
      <nav className="flex-1 space-y-1 p-3" aria-label="Admin">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = "exact" in item && item.exact ? path === item.to : path.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNav}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-primary text-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-3">
        <Link to="/" onClick={onNav} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent">
          <ExternalLink className="size-4" /> View site
        </Link>
      </div>
    </div>
  );
}

export function AdminLayout({ children, title, description, actions }: { children: React.ReactNode; title: string; description?: string; actions?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar md:block">
        <SidebarContent />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b bg-background/90 px-4 py-3 backdrop-blur md:px-8">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden" aria-label="Open admin menu"><Menu className="size-5" /></button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="sr-only"><SheetTitle>Admin navigation</SheetTitle></SheetHeader>
              <SidebarContent onNav={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
          <div className="min-w-0 flex-1">
            <h1 className="truncate font-display text-xl text-foreground sm:text-2xl">{title}</h1>
            {description && <p className="truncate text-sm text-muted-foreground">{description}</p>}
          </div>
          {actions}
        </header>

        <div className="flex-1 p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export function AdminLayoutOutlet() {
  return <Outlet />;
}
