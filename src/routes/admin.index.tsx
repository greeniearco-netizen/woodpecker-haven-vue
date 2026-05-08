import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, MessageSquare, Star, TrendingUp, ArrowUpRight } from "lucide-react";
import { ROOMS } from "@/data/rooms";
import { MOCK_INQUIRIES } from "@/data/inquiries";
import { TESTIMONIALS } from "@/data/testimonials";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const STATS = [
  { label: "Rooms", icon: BedDouble, value: ROOMS.length, change: "+0", color: "text-primary" },
  { label: "New inquiries (7d)", icon: MessageSquare, value: MOCK_INQUIRIES.filter((i) => i.status === "new").length, change: "+2", color: "text-accent" },
  { label: "Avg. rating", icon: Star, value: "4.9", change: "+0.1", color: "text-yellow-600" },
  { label: "Occupancy", icon: TrendingUp, value: "78%", change: "+12%", color: "text-emerald-600" },
];

function Dashboard() {
  return (
    <AdminLayout title="Dashboard" description="An overview of your guest house performance">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
                <Icon className={`size-4 ${s.color}`} />
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl">{s.value}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-600"><ArrowUpRight className="size-3" />{s.change} this week</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Recent inquiries</CardTitle></CardHeader>
          <CardContent>
            <ul className="divide-y">
              {MOCK_INQUIRIES.slice(0, 4).map((i) => (
                <li key={i.id} className="flex items-center justify-between py-3 text-sm">
                  <div className="min-w-0">
                    <p className="font-medium">{i.name}</p>
                    <p className="truncate text-muted-foreground">{i.message}</p>
                  </div>
                  <span className="ml-3 shrink-0 text-xs text-muted-foreground">{new Date(i.createdAt).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Latest reviews</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="text-sm">
                <p className="font-medium">{t.name} · <span className="text-yellow-600">{"★".repeat(t.rating)}</span></p>
                <p className="mt-1 line-clamp-2 text-muted-foreground">"{t.text}"</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader><CardTitle>Bookings (placeholder)</CardTitle></CardHeader>
        <CardContent>
          <div className="flex h-48 items-end gap-2">
            {[40, 65, 50, 78, 60, 92, 70].map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t bg-primary/80" style={{ height: `${v}%` }} />
                <span className="text-xs text-muted-foreground">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
