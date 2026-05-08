import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { TESTIMONIALS } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Plus, Star, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/testimonials")({ component: AdminTestimonials });

function AdminTestimonials() {
  return (
    <AdminLayout title="Testimonials" description="Manage guest reviews shown on your website" actions={
      <Button size="sm" onClick={() => toast.info("Demo only.")}><Plus className="size-4" /> Add</Button>
    }>
      <div className="grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="rounded-lg border bg-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location} · {new Date(t.date).toLocaleDateString()}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => toast.info("Demo only.")}><Trash2 className="size-4" /></Button>
            </div>
            <div className="my-2 flex text-yellow-600">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
            <p className="text-sm text-muted-foreground">"{t.text}"</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
