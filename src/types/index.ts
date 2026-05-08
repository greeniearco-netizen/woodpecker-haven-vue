export interface Room {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  pricePerNight: number; // ZAR
  maxGuests: number;
  bedType: string;
  size: string; // e.g. "28 m²"
  image: string;
  gallery: string[];
  amenities: string[];
  available: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "rooms" | "exterior" | "garden" | "dining" | "wildlife";
  width: number;
  height: number;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  message: string;
  createdAt: string;
  status: "new" | "responded" | "archived";
}

export interface FaqItem {
  q: string;
  a: string;
}
