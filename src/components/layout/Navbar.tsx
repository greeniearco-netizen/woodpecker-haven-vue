import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Bird } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { BookNowButton } from "@/components/shared/BookNowButton";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "border-b border-border/50 bg-background/85 backdrop-blur-md",
      )}
    >
      <div className="container-prose flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-full",
              transparent ? "bg-white/15 text-white backdrop-blur" : "bg-primary text-primary-foreground",
            )}
          >
            <Bird className="size-5" aria-hidden />
          </span>
          <span className={cn("text-base sm:text-lg", transparent ? "text-white" : "text-foreground")}>
            {SITE.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors",
                transparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground",
              )}
              activeProps={{ className: cn("font-semibold", transparent ? "text-white" : "text-foreground") }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookNowButton className="bg-gradient-warm text-primary-foreground hover:opacity-95" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-md md:hidden",
                transparent ? "text-white" : "text-foreground",
              )}
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm p-6">
            <SheetHeader className="mb-6 p-0 text-left">
              <SheetTitle className="font-display text-2xl">{SITE.shortName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  activeProps={{ className: "bg-muted text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <BookNowButton className="w-full bg-gradient-warm text-primary-foreground" size="lg" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
