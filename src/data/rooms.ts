import type { Room } from "@/types";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import bathroom from "@/assets/bathroom.jpg";
import garden from "@/assets/garden.jpg";

export const ROOMS: Room[] = [
  {
    id: "1",
    slug: "garden-double",
    name: "Garden Double",
    shortDescription: "A peaceful double room overlooking our birdsong garden.",
    description:
      "Wake up to birdsong and soft morning light in our flagship Garden Double. Featuring a queen bed dressed in crisp white linen, warm wood furnishings, and direct access to the garden patio.",
    pricePerNight: 950,
    maxGuests: 2,
    bedType: "Queen bed",
    size: "28 m²",
    image: room1,
    gallery: [room1, bathroom, garden],
    amenities: ["Free WiFi", "Air conditioning", "Secure parking", "Breakfast included", "En-suite bathroom", "Coffee & tea station"],
    available: true,
  },
  {
    id: "2",
    slug: "twin-room",
    name: "Classic Twin",
    shortDescription: "Two single beds — perfect for friends or business travellers.",
    description:
      "Our Classic Twin offers two comfortable single beds in a bright, calming space. Ideal for colleagues, friends, or solo travellers needing extra room to spread out.",
    pricePerNight: 850,
    maxGuests: 2,
    bedType: "2 single beds",
    size: "24 m²",
    image: room2,
    gallery: [room2, bathroom],
    amenities: ["Free WiFi", "Heater", "Secure parking", "Breakfast included", "En-suite bathroom", "Workspace"],
    available: true,
  },
  {
    id: "3",
    slug: "family-suite",
    name: "Family Suite",
    shortDescription: "Spacious suite with a queen bed and bunk area for the kids.",
    description:
      "Our largest room. A queen bed for the parents and a separate bunk nook for two children, with views of the garden and ample space to relax as a family.",
    pricePerNight: 1450,
    maxGuests: 4,
    bedType: "Queen + bunks",
    size: "42 m²",
    image: room3,
    gallery: [room3, garden, bathroom],
    amenities: ["Free WiFi", "Air conditioning", "Secure parking", "Breakfast included", "En-suite bathroom", "Family-friendly"],
    available: true,
  },
];

export function getRoomBySlug(slug: string) {
  return ROOMS.find((r) => r.slug === slug);
}
