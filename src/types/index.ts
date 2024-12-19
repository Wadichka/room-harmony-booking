export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "luxury" | "semi-luxury" | "ordinary";
  numberOfRooms: number;
  available: boolean;
  nextAvailableDate?: string;
  images: string[];
  amenities: string[];
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  status: "pending" | "confirmed" | "cancelled";
}