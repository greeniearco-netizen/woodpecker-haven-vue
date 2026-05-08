import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/data/faq";
import { SITE } from "@/constants/site";

const title = `FAQ — ${SITE.name}`;
const description = "Answers to common questions about check-in, breakfast, parking, WiFi, and our cancellation policy.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/faq` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PublicLayout>
      <section className="container-prose pt-32 md:pt-40">
        <Reveal>
          <SectionHeader eyebrow="Help" title="Frequently asked questions" description="Everything you need to know before you arrive." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-card p-2 shadow-soft sm:p-4">
            <Accordion type="single" collapsible>
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`q-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </section>
    </PublicLayout>
  );
}
