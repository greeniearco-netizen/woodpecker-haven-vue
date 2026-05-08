import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { ROOMS } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/rooms")({ component: AdminRooms });

function AdminRooms() {
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const filtered = ROOMS.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AdminLayout title="Rooms" description="Manage your room inventory" actions={
      <Button size="sm" onClick={() => setEditing("new")}><Plus className="size-4" /> New room</Button>
    }>
      <div className="mb-4 flex items-center gap-2">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search rooms..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Room</TableHead>
              <TableHead>Bed</TableHead>
              <TableHead>Sleeps</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((r) => (
              <TableRow key={r.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img src={r.image} alt="" className="size-12 rounded-md object-cover" />
                    <div>
                      <p className="font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.size}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{r.bedType}</TableCell>
                <TableCell>{r.maxGuests}</TableCell>
                <TableCell>R{r.pricePerNight}</TableCell>
                <TableCell>
                  <Badge variant={r.available ? "default" : "secondary"}>{r.available ? "Available" : "Booked"}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" onClick={() => setEditing(r.id)}><Pencil className="size-4" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => toast.info("Demo only — wire backend to delete.")}><Trash2 className="size-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing === "new" ? "New room" : "Edit room"}</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div><Label>Name</Label><Input defaultValue={ROOMS.find((r) => r.id === editing)?.name ?? ""} /></div>
            <div><Label>Description</Label><Textarea rows={4} defaultValue={ROOMS.find((r) => r.id === editing)?.description ?? ""} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Price (ZAR)</Label><Input type="number" defaultValue={ROOMS.find((r) => r.id === editing)?.pricePerNight ?? 0} /></div>
              <div><Label>Max guests</Label><Input type="number" defaultValue={ROOMS.find((r) => r.id === editing)?.maxGuests ?? 2} /></div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
            <Button onClick={() => { toast.success("Saved (demo only)"); setEditing(null); }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
