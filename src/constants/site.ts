// Central site config — easy to edit and swap to dynamic CMS later.

export const SITE = {
  name: "Woodpecker Guest House",
  shortName: "Woodpecker",
  tagline: "Comfortable Accommodation in Ficksburg",
  description:
    "A warm, tranquil guest house in Ficksburg, Free State. Comfortable rooms, hearty breakfasts, and birdsong-filled gardens — your countryside escape.",
  url: "https://woodpeckerguesthouse.co.za",
  location: {
    street: "12 Acacia Avenue",
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
    { day: "Check-in", time: "From 14:00" },
    { day: "Check-out", time: "By 10:00" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

// NightsBridge BBID booking URL — replace "#" with your actual BBID link.
// Example: https://book.nightsbridge.com/00000
export const NIGHTSBRIDGE_URL = "#";

export const WHATSAPP_URL = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Woodpecker Guest House, I'd like to enquire about a stay.",
)}`;
