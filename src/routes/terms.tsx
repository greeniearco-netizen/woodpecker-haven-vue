import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SITE } from "@/constants/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: `Terms — ${SITE.name}` }, { name: "description", content: "Booking and stay terms." }],
    links: [{ rel: "canonical", href: `${SITE.url}/terms` }],
  }),
  component: () => (
    <PublicLayout>
      <article className="container-prose max-w-3xl pt-32 pb-20 md:pt-40">
        <h1 className="font-display text-4xl">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        <h2 className="mt-8 font-display text-2xl">Bookings</h2>
        <p className="mt-2 text-muted-foreground">All bookings are subject to availability and confirmation. Rates are quoted in South African Rand (ZAR) and include breakfast.</p>
        <h2 className="mt-8 font-display text-2xl">Cancellations</h2>
        <p className="mt-2 text-muted-foreground">Free cancellation up to 48 hours before check-in. Cancellations within 48 hours are subject to a one-night charge.</p>
        <h2 className="mt-8 font-display text-2xl">House rules</h2>
        <p className="mt-2 text-muted-foreground">Quiet hours after 22:00. No smoking indoors. No pets. Children warmly welcome under parental supervision.</p>
        <h2 className="mt-8 font-display text-2xl">Liability</h2>
        <p className="mt-2 text-muted-foreground">{SITE.name} is not liable for personal items left unattended on the property.</p>
      </article>
    </PublicLayout>
  ),
});
