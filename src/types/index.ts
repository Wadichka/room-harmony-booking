export type RoomType = "luxury" | "semi-luxury" | "ordinary";

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  price: number;
  numberOfRooms: number;
  available: boolean;
  nextAvailableDate?: string;
  images: string[];
  description: string;
  amenities: string[];
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guestInfo: {
    firstName: string;
    lastName: string;
    patronymic: string;
    birthDate: string;
    documentType: string;
    documentSeries: string;
    documentNumber: string;
    address: string;
  };
  status: "confirmed" | "cancelled" | "completed";
}

export interface User {
  id: string;
  username: string;
  bookings: Booking[];
}