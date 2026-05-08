import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Hero } from "@/components/home/Hero";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { AmenitiesGrid } from "@/components/home/AmenitiesGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { MapSection } from "@/components/home/MapSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SITE } from "@/constants/site";
import { Reveal } from "@/components/shared/Reveal";

const title = `${SITE.name} — Comfortable Accommodation in Ficksburg`;
const description = SITE.description;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE.name,
  description,
  url: SITE.url,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
  priceRange: "R850 – R1450",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.location.street,
    addressLocality: SITE.location.city,
    addressRegion: SITE.location.region,
    postalCode: SITE.location.postalCode,
    addressCountry: SITE.location.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.location.lat, longitude: SITE.location.lng },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE.url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: SITE.url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <PublicLayout>
      <Hero />
      <section className="container-prose py-16 text-center md:py-24">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">Welcome</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl">
            A warm welcome, every time you walk through our door.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Woodpecker Guest House offers thoughtfully appointed rooms, a hearty home-cooked breakfast, and the gentle calm of a country garden — all just minutes from the centre of Ficksburg.
          </p>
        </Reveal>
      </section>
      <FeaturedRooms />
      <AmenitiesGrid />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <MapSection />
      <CtaBanner />
    </PublicLayout>
  );
}
