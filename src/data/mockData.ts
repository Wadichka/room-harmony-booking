import { Room, Booking, User } from "../types";

export const rooms: Room[] = [
  {
    id: "1",
    name: "Presidential Suite",
    type: "luxury",
    price: 1000,
    numberOfRooms: 3,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop"
    ],
    description: "Luxurious suite with panoramic city views",
    amenities: ["King bed", "Private balcony", "Jacuzzi", "Butler service"]
  },
  {
    id: "2",
    name: "Executive Room",
    type: "semi-luxury",
    price: 500,
    numberOfRooms: 2,
    available: false,
    nextAvailableDate: "2024-04-15",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop"
    ],
    description: "Spacious room with modern amenities",
    amenities: ["Queen bed", "City view", "Mini bar"]
  },
  {
    id: "3",
    name: "Standard Room",
    type: "ordinary",
    price: 200,
    numberOfRooms: 1,
    available: true,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop"
    ],
    description: "Comfortable room for business travelers",
    amenities: ["Twin beds", "Work desk", "Coffee maker"]
  }
];

export const mockBookings: Booking[] = [];
export const mockUsers: User[] = [];