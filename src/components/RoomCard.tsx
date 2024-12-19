import { Room } from "../types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface RoomCardProps {
  room: Room;
  onBook: (roomId: string) => void;
}

export const RoomCard = ({ room, onBook }: RoomCardProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden fade-in hover-lift">
      <div className="relative h-64">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <Badge className="absolute top-4 right-4 bg-white/90 text-black">
          {room.type}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
        <p className="text-muted-foreground mb-4">{room.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-lg font-semibold">${room.price}/night</p>
            <p className="text-sm text-muted-foreground">
              {room.numberOfRooms} rooms inside
            </p>
          </div>
          <div>
            {room.available ? (
              <Badge className="bg-green-500">Available</Badge>
            ) : (
              <Badge variant="secondary">
                Available from{" "}
                {format(new Date(room.nextAvailableDate!), "MMM dd, yyyy")}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.map((amenity) => (
            <Badge key={amenity} variant="outline">
              {amenity}
            </Badge>
          ))}
        </div>
        <Button
          onClick={() => onBook(room.id)}
          className="w-full bg-gold hover:bg-gold/90 text-white"
          disabled={!room.available}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};