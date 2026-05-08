import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { MOCK_INQUIRIES } from "@/data/inquiries";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Inquiry } from "@/types";

export const Route = createFileRoute("/admin/inquiries")({ component: AdminInquiries });

function AdminInquiries() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Inquiry | null>(null);
  const filtered = MOCK_INQUIRIES.filter((i) => `${i.name} ${i.email} ${i.message}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <AdminLayout title="Inquiries" description="Booking and contact enquiries">
      <div className="mb-4 max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ref</TableHead>
              <TableHead>Guest</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((i) => (
              <TableRow key={i.id} className="cursor-pointer" onClick={() => setOpen(i)}>
                <TableCell className="font-mono text-xs">{i.id}</TableCell>
                <TableCell>
                  <p className="font-medium">{i.name}</p>
                  <p className="text-xs text-muted-foreground">{i.email}</p>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {i.checkIn ? `${i.checkIn} → ${i.checkOut}` : "—"}
                </TableCell>
                <TableCell><StatusBadge status={i.status} /></TableCell>
                <TableCell className="text-sm text-muted-foreground">{new Date(i.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{open?.name}</DialogTitle></DialogHeader>
          {open && (
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> {open.email}</p>
              {open.phone && <p><strong>Phone:</strong> {open.phone}</p>}
              {open.checkIn && <p><strong>Stay:</strong> {open.checkIn} – {open.checkOut} · {open.guests} guest(s)</p>}
              <p className="rounded-md bg-muted p-3 text-muted-foreground">{open.message}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

function StatusBadge({ status }: { status: Inquiry["status"] }) {
  const map = {
    new: { label: "New", variant: "default" as const },
    responded: { label: "Responded", variant: "secondary" as const },
    archived: { label: "Archived", variant: "outline" as const },
  };
  const s = map[status];
  return <Badge variant={s.variant}>{s.label}</Badge>;
}
