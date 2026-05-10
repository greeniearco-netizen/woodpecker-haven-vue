// Central site config — easy to edit and swap to dynamic CMS later.

export const SITE = {
  name: "Woodpecker Guesthouse",
  shortName: "Woodpecker",
  tagline: "Where guests become friends",
  description:
    "Woodpecker Guesthouse in the heart of Ficksburg — comfortable rooms with private bathrooms, free WiFi, free secure parking, and a hearty breakfast. Rated 8.8 fabulous on Booking.com.",
  url: "https://woodpeckerguesthouse.co.za",
  location: {
    street: "Kort Street 4",
    city: "Ficksburg",
    region: "Free State",
    postalCode: "9730",
    country: "South Africa",
    countryCode: "ZA",
    lat: -28.8714,
    lng: 27.8761,
  },
  contact: {
    phone: "+27 51 933 0000",
    phoneHref: "tel:+27519330000",
    whatsapp: "27820000000", // international format, no + or spaces
    email: "stay@woodpeckerguesthouse.co.za",
  },
  hours: [
    { day: "Reception", time: "07:00 – 21:00 daily" },
    { day: "Check-in", time: "From 14:00 (private & express check-in)" },
    { day: "Check-out", time: "By 10:00 (express check-out)" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    booking: "https://www.booking.com/hotel/za/woodpecker-guesthouse.html",
  },
  languages: ["English", "Afrikaans"],
  host: {
    name: "Wanda Du Toit",
    role: "Owner & Host",
    companyScore: 9.3,
    companyReviews: 60,
  },
  ratings: {
    overall: 8.8,
    label: "Fabulous",
    reviews: 61,
    qualityStars: 4,
    categories: [
      { name: "Staff", score: 9.3 },
      { name: "Comfort", score: 9.3 },
      { name: "Cleanliness", score: 9.2 },
      { name: "Free WiFi", score: 9.0 },
      { name: "Facilities", score: 8.9 },
      { name: "Value for money", score: 8.8 },
      { name: "Location", score: 8.7 },
    ],
  },
  highlights: [
    "Free on-site parking",
    "Fabulous free WiFi",
    "Wheelchair accessible",
    "Family rooms",
    "Tea/coffee in every room",
    "Non-smoking rooms",
  ],
  nearby: [
    { name: "Ficksburg Golf Club", distance: "3 min walk" },
    { name: "Ficksburg town centre", distance: "5 min drive" },
  ],
} as const;

// NightsBridge BBID booking URL — replace "#" with your actual BBID link.
// Example: https://book.nightsbridge.com/00000
export const NIGHTSBRIDGE_URL = "#";

export const WHATSAPP_URL = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Woodpecker Guesthouse, I'd like to enquire about a stay.",
)}`;
