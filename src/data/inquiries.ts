import type { Inquiry } from "@/types";

// Mock inquiries for the admin demo dashboard.
export const MOCK_INQUIRIES: Inquiry[] = [
  { id: "INQ-1042", name: "Thabo N.", email: "thabo@example.com", phone: "+27 82 555 1234", checkIn: "2025-12-18", checkOut: "2025-12-21", guests: 2, message: "Anniversary weekend — would love a quiet room with a view.", createdAt: "2025-11-02T08:14:00Z", status: "new" },
  { id: "INQ-1041", name: "Marie van der Merwe", email: "marie@example.com", phone: "+27 71 222 4455", checkIn: "2025-12-23", checkOut: "2025-12-27", guests: 4, message: "Family of four, looking at the family suite over Christmas.", createdAt: "2025-11-01T16:42:00Z", status: "responded" },
  { id: "INQ-1040", name: "Lebo K.", email: "lebo@example.com", message: "Do you accommodate small corporate groups?", createdAt: "2025-10-30T11:05:00Z", status: "new" },
  { id: "INQ-1039", name: "John Smith", email: "john@example.com", phone: "+27 84 999 0000", checkIn: "2026-01-15", checkOut: "2026-01-17", guests: 1, message: "Business trip to Ficksburg — need fast WiFi.", createdAt: "2025-10-28T09:21:00Z", status: "archived" },
];
