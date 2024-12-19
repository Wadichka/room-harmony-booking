export const rooms = [
  {
    id: "1",
    name: "Royal Suite",
    description: "Luxurious suite with panoramic city views",
    price: 500,
    type: "luxury",
    numberOfRooms: 3,
    available: true,
    images: ["/placeholder.svg"],
    amenities: ["King Size Bed", "Jacuzzi", "Mini Bar", "Ocean View"],
  },
  {
    id: "2",
    name: "Executive Room",
    description: "Comfortable room for business travelers",
    price: 300,
    type: "semi-luxury",
    numberOfRooms: 2,
    available: false,
    nextAvailableDate: "2024-05-01",
    images: ["/placeholder.svg"],
    amenities: ["Queen Size Bed", "Work Desk", "City View"],
  },
  {
    id: "3",
    name: "Standard Room",
    description: "Cozy room with essential amenities",
    price: 150,
    type: "ordinary",
    numberOfRooms: 1,
    available: true,
    images: ["/placeholder.svg"],
    amenities: ["Twin Beds", "TV", "Wi-Fi"],
  },
] as const;

export const bookings = [
  {
    id: "1",
    roomId: "1",
    userId: "1",
    checkIn: "2024-04-01",
    checkOut: "2024-04-05",
    status: "confirmed",
  },
] as const;