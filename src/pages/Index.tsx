import { useState } from "react";
import { RoomCard } from "@/components/RoomCard";
import { SearchFilters } from "@/components/SearchFilters";
import { BookingForm } from "@/components/BookingForm";
import { rooms } from "@/data/mockData";
import { Room } from "@/types";

const Index = () => {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleFilter = ({
    priceRange,
    type,
    date,
  }: {
    priceRange: [number, number];
    type: string;
    date: Date | undefined;
  }) => {
    const filtered = rooms.filter((room) => {
      const matchesPrice =
        room.price >= priceRange[0] && room.price <= priceRange[1];
      const matchesType = type ? room.type === type : true;
      const matchesDate = date
        ? room.available ||
          (room.nextAvailableDate &&
            new Date(room.nextAvailableDate) <= new Date(date))
        : true;
      return matchesPrice && matchesType && matchesDate;
    });
    setFilteredRooms(filtered);
  };

  const handleBook = (roomId: string) => {
    const room = rooms.find((r) => r.id === roomId);
    if (room) {
      setSelectedRoom(room);
      setIsBookingFormOpen(true);
    }
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log("Booking submitted:", bookingData);
    // Here you would typically handle the booking submission
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Luxury & Comfort
          </h1>
          <p className="text-xl text-muted-foreground">
            Find your perfect stay with our curated selection of rooms
          </p>
        </div>

        <SearchFilters onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={handleBook} />
          ))}
        </div>

        {selectedRoom && (
          <BookingForm
            room={selectedRoom}
            isOpen={isBookingFormOpen}
            onClose={() => setIsBookingFormOpen(false)}
            onSubmit={handleBookingSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Index;