import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SITE } from "@/constants/site";

const title = `Privacy Policy — ${SITE.name}`;
const description = `How ${SITE.name} collects, uses, and protects your personal information when you enquire or book a stay with us in Ficksburg.`;
const url = `${SITE.url}/privacy`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: () => (
    <PublicLayout>
      <article className="container-prose prose prose-stone max-w-3xl pt-32 pb-20 md:pt-40">
        <h1 className="font-display text-4xl">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        <p className="mt-6 text-muted-foreground">{SITE.name} respects your privacy. We collect only the information needed to respond to your enquiries and process your bookings — typically your name, contact details, and stay preferences.</p>
        <h2 className="mt-8 font-display text-2xl">What we collect</h2>
        <p className="mt-2 text-muted-foreground">Information you provide via our contact form, email, phone, or WhatsApp. We do not sell your data.</p>
        <h2 className="mt-8 font-display text-2xl">How we use it</h2>
        <p className="mt-2 text-muted-foreground">To respond to enquiries, manage reservations, and occasionally share important booking-related updates.</p>
        <h2 className="mt-8 font-display text-2xl">Contact</h2>
        <p className="mt-2 text-muted-foreground">Questions about your data? Email <a href={`mailto:${SITE.contact.email}`} className="text-primary underline">{SITE.contact.email}</a>.</p>
      </article>
    </PublicLayout>
  ),
});
