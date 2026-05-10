import { SITE } from "@/constants/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { MapPin } from "lucide-react";

export function MapSection() {
  const q = encodeURIComponent(`${SITE.location.street}, ${SITE.location.city}, ${SITE.location.country}`);
  return (
    <section className="container-prose py-20 md:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Find us"
          title="A quiet street in the heart of Ficksburg"
          description="Easy to reach, easy to find — and well worth the drive."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl border shadow-card">
          <iframe
            title="Map of Woodpecker Guesthouse location"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0"
          />
        </div>
      </Reveal>
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 text-accent" />
        <span>{SITE.location.street}, {SITE.location.city}, {SITE.location.region}, {SITE.location.country}</span>
      </div>
    </section>
  );
}
