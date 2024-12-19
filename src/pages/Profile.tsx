import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockBookings } from "@/data/mockData";
import { format } from "date-fns";

const Profile = () => {
  const navigate = useNavigate();
  const username = "John Doe"; // This would typically come from authentication state

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="glass-card p-8 rounded-lg space-y-6 fade-in">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {username}</h1>
              <p className="text-muted-foreground">Manage your bookings</p>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="hover-lift"
            >
              Browse Rooms
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Bookings</h2>
            {mockBookings.length > 0 ? (
              <div className="grid gap-4">
                {mockBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="glass-card p-6 rounded-lg hover-lift"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Booking #{booking.id}
                        </h3>
                        <p className="text-muted-foreground">
                          Check-in:{" "}
                          {format(new Date(booking.checkIn), "MMM dd, yyyy")}
                        </p>
                        <p className="text-muted-foreground">
                          Check-out:{" "}
                          {format(new Date(booking.checkOut), "MMM dd, yyyy")}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No bookings found. Start by browsing our available rooms!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;