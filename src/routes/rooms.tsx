import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ROOMS } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SITE } from "@/constants/site";

const title = `Rooms & Suites — ${SITE.name}`;
const description = "Comfortable double, twin, and family rooms in Ficksburg. Free WiFi, secure parking, and breakfast included.";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/rooms` }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <PublicLayout>
      <section className="container-prose pt-32 md:pt-40">
        <Reveal>
          <SectionHeader
            eyebrow="Accommodation"
            title="Rooms designed for rest"
            description="Three distinctive rooms — each with crisp linens, a modern en-suite, and the calm of our garden just outside."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.08}><RoomCard room={room} /></Reveal>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
