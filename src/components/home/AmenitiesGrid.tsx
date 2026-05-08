import { AMENITIES } from "@/data/amenities";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function AmenitiesGrid() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-prose">
        <Reveal>
          <SectionHeader
            eyebrow="What's included"
            title="Every detail considered"
            description="From fast WiFi to fresh breakfast, we've taken care of everything so you can simply relax."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="rounded-xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-card">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
