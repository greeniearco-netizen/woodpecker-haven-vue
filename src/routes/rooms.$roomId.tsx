import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { getRoomBySlug, ROOMS } from "@/data/rooms";
import { BookNowButton } from "@/components/shared/BookNowButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BedDouble, Maximize, Check, ArrowLeft } from "lucide-react";
import { SITE } from "@/constants/site";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/rooms/$roomId")({
  loader: ({ params }) => {
    const room = getRoomBySlug(params.roomId);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    const room = loaderData?.room;
    if (!room) return {};
    const url = `${SITE.url}/rooms/${room.slug}`;
    const title = `${room.name} — ${SITE.name} | Ficksburg`;
    const description = `${room.shortDescription} Sleeps ${room.maxGuests}, ${room.bedType}, ${room.size}. From R${room.pricePerNight}/night, breakfast included.`;
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: room.name,
        description: room.description,
        url,
        image: room.gallery,
        occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests },
        bed: { "@type": "BedDetails", typeOfBed: room.bedType },
        floorSize: { "@type": "QuantitativeValue", value: room.size },
        amenityFeature: room.amenities.map((a: string) => ({
          "@type": "LocationFeatureSpecification", name: a,
        })),
        offers: {
          "@type": "Offer",
          price: room.pricePerNight,
          priceCurrency: "ZAR",
          availability: room.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          url,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Rooms", item: `${SITE.url}/rooms` },
          { "@type": "ListItem", position: 3, name: room.name, item: url },
        ],
      },
    ];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: room.image },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { name: "twitter:image", content: room.image },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  notFoundComponent: () => (
    <PublicLayout>
      <div className="container-prose py-32 text-center">
        <h1 className="font-display text-4xl">Room not found</h1>
        <Button asChild className="mt-6"><Link to="/rooms">View all rooms</Link></Button>
      </div>
    </PublicLayout>
  ),
  component: RoomDetail,
});

function RoomDetail() {
  const { room } = Route.useLoaderData();
  const others = ROOMS.filter((r) => r.id !== room.id).slice(0, 2);
  return (
    <PublicLayout>
      <section className="container-prose pt-28 md:pt-36">
        <Link to="/rooms" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> All rooms
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <img src={room.image} alt={room.name} width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
            </Reveal>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {room.gallery.slice(0, 3).map((src: string, i: number) => (
                <img key={i} src={src} alt={`${room.name} view ${i + 1}`} loading="lazy" decoding="async" className="aspect-square w-full rounded-lg object-cover" />
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">Room</p>
              <h1 className="font-display text-4xl md:text-5xl">{room.name}</h1>
              <p className="mt-4 text-muted-foreground">{room.description}</p>

              <ul className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <li className="rounded-lg border bg-card p-3 text-center">
                  <Users className="mx-auto size-4 text-accent" />
                  <span className="mt-1 block text-xs text-muted-foreground">Sleeps</span>
                  <strong>{room.maxGuests}</strong>
                </li>
                <li className="rounded-lg border bg-card p-3 text-center">
                  <BedDouble className="mx-auto size-4 text-accent" />
                  <span className="mt-1 block text-xs text-muted-foreground">Bed</span>
                  <strong className="text-xs">{room.bedType}</strong>
                </li>
                <li className="rounded-lg border bg-card p-3 text-center">
                  <Maximize className="mx-auto size-4 text-accent" />
                  <span className="mt-1 block text-xs text-muted-foreground">Size</span>
                  <strong>{room.size}</strong>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border bg-card p-5">
                <h2 className="mb-3 font-display text-lg">In this room</h2>
                <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {room.amenities.map((a: string) => (
                    <li key={a} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="size-4 text-primary" /> {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 rounded-xl border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-2xl font-semibold">R{room.pricePerNight} <span className="text-sm font-normal text-muted-foreground">/ night</span></p>
                  <Badge variant="outline" className="mt-1">{room.available ? "Available" : "Fully booked"}</Badge>
                </div>
                <BookNowButton size="lg" className="bg-gradient-warm text-primary-foreground" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <h2 className="mb-8 font-display text-3xl">Other rooms you might like</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((r) => (
              <Link key={r.id} to="/rooms/$roomId" params={{ roomId: r.slug }} className="group flex gap-4 rounded-xl border bg-card p-3 shadow-soft transition hover:shadow-card">
                <img src={r.image} alt={r.name} loading="lazy" className="size-32 shrink-0 rounded-lg object-cover" />
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl group-hover:text-primary">{r.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.shortDescription}</p>
                  <p className="mt-2 text-sm font-medium">R{r.pricePerNight} <span className="text-muted-foreground">/ night</span></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
