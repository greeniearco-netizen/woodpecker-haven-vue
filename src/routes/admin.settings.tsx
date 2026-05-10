import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE, NIGHTSBRIDGE_URL } from "@/constants/site";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/settings")({ component: AdminSettings });

function AdminSettings() {
  return (
    <AdminLayout title="Website settings" description="Update site-wide details">
      <form
        onSubmit={(e) => { e.preventDefault(); toast.success("Settings saved (demo only)."); }}
        className="grid gap-6 lg:grid-cols-2"
      >
        <Card>
          <CardHeader><CardTitle>Property details</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><Label>Property name</Label><Input defaultValue={SITE.name} /></div>
            <div><Label>Tagline</Label><Input defaultValue={SITE.tagline} /></div>
            <div><Label>Description</Label><Textarea rows={4} defaultValue={SITE.description} /></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Contact</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><Label>Phone</Label><Input defaultValue={SITE.contact.phone} /></div>
            <div><Label>Email</Label><Input defaultValue={SITE.contact.email} /></div>
            <div><Label>WhatsApp number</Label><Input defaultValue={SITE.contact.whatsapp} /></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Address</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><Label>Street</Label><Input defaultValue={SITE.location.street} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>City</Label><Input defaultValue={SITE.location.city} /></div>
              <div><Label>Postal code</Label><Input defaultValue={SITE.location.postalCode} /></div>
            </div>
            <div><Label>Region</Label><Input defaultValue={SITE.location.region} /></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Host & languages</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><Label>Host name</Label><Input defaultValue={SITE.host.name} /></div>
            <div><Label>Languages spoken (comma separated)</Label><Input defaultValue={SITE.languages.join(", ")} /></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Guest score</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Overall score</Label><Input type="number" step="0.1" defaultValue={SITE.ratings.overall} /></div>
              <div><Label>Review count</Label><Input type="number" defaultValue={SITE.ratings.reviews} /></div>
            </div>
            <div><Label>Label (e.g. Fabulous)</Label><Input defaultValue={SITE.ratings.label} /></div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Booking integration</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label>NightsBridge BBID URL</Label>
              <Input defaultValue={NIGHTSBRIDGE_URL} placeholder="https://book.nightsbridge.com/00000" />
              <p className="mt-1 text-xs text-muted-foreground">Set your BBID booking URL. All "Book Now" buttons site-wide will use this link.</p>
            </div>
          </CardContent>
        </Card>
        <div className="lg:col-span-2"><Button type="submit" className="bg-gradient-warm text-primary-foreground">Save changes</Button></div>
      </form>
    </AdminLayout>
  );
}
