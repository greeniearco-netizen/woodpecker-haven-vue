import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { GALLERY } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/gallery")({ component: AdminGallery });

function AdminGallery() {
  return (
    <AdminLayout title="Gallery" description="Manage gallery images" actions={
      <Button size="sm" onClick={() => toast.info("Demo only — wire backend to upload.")}><Plus className="size-4" /> Upload</Button>
    }>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {GALLERY.map((img) => (
          <div key={img.id} className="group relative overflow-hidden rounded-lg border bg-card">
            <img src={img.src} alt={img.alt} className="aspect-square w-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <Badge variant="secondary">{img.category}</Badge>
              <Button size="icon" variant="destructive" className="size-7" onClick={() => toast.info("Demo only.")}><Trash2 className="size-3" /></Button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
