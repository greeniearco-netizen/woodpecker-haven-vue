import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SITE } from "@/constants/site";
import { Bird, Heart, Sparkles, Trees } from "lucide-react";
import lounge from "@/assets/lounge.jpg";
import woodpecker from "@/assets/woodpecker.jpg";

const title = `About — ${SITE.name}`;
const description = "Our story, our garden, and our philosophy of warm hospitality in Ficksburg, Free State.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: `${SITE.url}/about` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: lounge },
      { property: "og:image:alt", content: `${SITE.name} guest lounge` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: lounge },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/about` }],
  }),
  component: AboutPage,
});

const HIGHLIGHTS = [
  { icon: Heart, title: "Family-run hospitality", desc: "Owner-managed, with attention to every detail and every guest." },
  { icon: Bird, title: "A haven for birdlife", desc: "Over 30 species of birds visit our gardens — bring your binoculars." },
  { icon: Trees, title: "Tranquil gardens", desc: "Mature trees, indigenous plants, and quiet seating to unwind in." },
  { icon: Sparkles, title: "Spotlessly maintained", desc: "Crisp linens, sparkling bathrooms, and thoughtful in-room touches." },
];

function AboutPage() {
  return (
    <PublicLayout>
      <section className="container-prose pt-32 md:pt-40">
        <Reveal>
          <SectionHeader
            eyebrow="Our story"
            title="A guest house with a quiet soul"
            description="For over fifteen years, Woodpecker Guest House has welcomed travellers, families, and weekend escapees to our small corner of the Free State."
          />
        </Reveal>
      </section>

      <section className="container-prose mt-16 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <img src={lounge} alt="The cosy guest lounge" width={1280} height={896} loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elegant" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl">From a family home to a cherished guest house</h2>
          <p className="mt-4 text-muted-foreground">
            What began as a sandstone family home on a quiet Ficksburg street has grown — gently and carefully — into a guest house known for its warmth, comfort, and proper home-cooked breakfasts.
          </p>
          <p className="mt-3 text-muted-foreground">
            We've kept the soul of the original house while adding the comforts modern travellers expect: fast WiFi, climate control, secure parking, and the kind of beds you don't want to leave.
          </p>
        </Reveal>
      </section>

      <section className="container-prose mt-24">
        <Reveal>
          <SectionHeader title="Why guests come back" align="left" className="mx-0" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-xl border bg-card p-6 shadow-soft">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-prose mt-24 grid items-center gap-10 md:grid-cols-2">
        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">The name</p>
          <h2 className="font-display text-3xl md:text-4xl">Why Woodpecker?</h2>
          <p className="mt-4 text-muted-foreground">
            Cardinal woodpeckers have nested in the old oak at the edge of our garden for as long as anyone can remember. Their soft tapping is one of the first things you'll hear in the morning — and one of the things our guests remember most.
          </p>
          <p className="mt-3 text-muted-foreground">
            We named the guest house after them as a small reminder: slow down, listen, and pay attention to the small, beautiful things.
          </p>
        </Reveal>
        <Reveal>
          <img src={woodpecker} alt="A cardinal woodpecker on a branch" width={1280} height={896} loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elegant" />
        </Reveal>
      </section>
    </PublicLayout>
  );
}
