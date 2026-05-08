import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ROOMS } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedRooms() {
  return (
    <section className="container-prose py-20 md:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Stay with us"
          title="Rooms & suites"
          description="Three thoughtfully designed spaces — each with comfortable beds, modern bathrooms, and the calm of our garden just outside the window."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ROOMS.map((room, i) => (
          <Reveal key={room.id} delay={i * 0.08}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/rooms" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          View all rooms <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
