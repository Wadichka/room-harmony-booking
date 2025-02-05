import { useState } from "react";
import { RoomCard } from "@/components/RoomCard";
import { BookingForm } from "@/components/BookingForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { rooms } from "@/data/mockData";
import { Room } from "@/types";

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<Room[]>(rooms);

  const handleBookRoom = (roomId: string) => {
    const room = availableRooms.find((r) => r.id === roomId);
    if (room) {
      setSelectedRoom(room);
      setIsBookingFormOpen(true);
    }
  };

  const handleBookingComplete = () => {
    setIsBookingFormOpen(false);
    setSelectedRoom(null);
    // Update available rooms after booking
    const updatedRooms = availableRooms.map((room) => {
      if (room.id === selectedRoom?.id) {
        return {
          ...room,
          available: false,
          nextAvailableDate: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
      }
      return room;
    });
    setAvailableRooms(updatedRooms);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Available Rooms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableRooms.map((room) => (
          <RoomCard key={room.id} room={room} onBook={handleBookRoom} />
        ))}
      </div>
      <Dialog open={isBookingFormOpen} onOpenChange={setIsBookingFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedRoom && (
            <BookingForm
              room={selectedRoom}
              onComplete={handleBookingComplete}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;