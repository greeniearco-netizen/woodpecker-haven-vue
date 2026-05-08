import type { GalleryImage } from "@/types";
import hero from "@/assets/hero.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import breakfast from "@/assets/breakfast.jpg";
import garden from "@/assets/garden.jpg";
import woodpecker from "@/assets/woodpecker.jpg";
import lounge from "@/assets/lounge.jpg";
import bathroom from "@/assets/bathroom.jpg";
import landscape from "@/assets/landscape.jpg";

export const GALLERY: GalleryImage[] = [
  { id: "1", src: hero, alt: "Woodpecker Guest House at golden hour", category: "exterior", width: 1920, height: 1280 },
  { id: "2", src: room1, alt: "Garden Double room interior", category: "rooms", width: 1280, height: 896 },
  { id: "3", src: garden, alt: "Birdsong garden with seating", category: "garden", width: 1280, height: 896 },
  { id: "4", src: breakfast, alt: "Hearty breakfast spread", category: "dining", width: 1280, height: 896 },
  { id: "5", src: room2, alt: "Classic Twin room", category: "rooms", width: 1280, height: 896 },
  { id: "6", src: woodpecker, alt: "Woodpecker bird in the garden", category: "wildlife", width: 1280, height: 896 },
  { id: "7", src: lounge, alt: "Cosy guest lounge with fireplace", category: "exterior", width: 1280, height: 896 },
  { id: "8", src: room3, alt: "Family Suite", category: "rooms", width: 1280, height: 896 },
  { id: "9", src: bathroom, alt: "Elegant bathroom interior", category: "rooms", width: 1280, height: 896 },
  { id: "10", src: landscape, alt: "Free State sandstone landscape", category: "exterior", width: 1280, height: 896 },
];
