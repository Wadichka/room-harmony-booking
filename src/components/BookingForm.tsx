import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Room } from "../types";

interface BookingFormProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (bookingData: any) => void;
}

export const BookingForm = ({
  room,
  isOpen,
  onClose,
  onSubmit,
}: BookingFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    patronymic: "",
    birthDate: "",
    sex: "male",
    documentType: "",
    documentSeries: "",
    documentNumber: "",
    address: "",
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book {room.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
            <Input
              placeholder="Patronymic"
              value={formData.patronymic}
              onChange={(e) =>
                setFormData({ ...formData, patronymic: e.target.value })
              }
              required
            />
            <Input
              type="date"
              placeholder="Birth Date"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
              required
            />
            <div className="space-y-3">
              <Label>Sex</Label>
              <RadioGroup
                value={formData.sex}
                onValueChange={(value) => setFormData({ ...formData, sex: value })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>
            <Select
              value={formData.documentType}
              onValueChange={(value) =>
                setFormData({ ...formData, documentType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Document Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="id">ID Card</SelectItem>
                <SelectItem value="driving">Driving License</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Document Series"
              value={formData.documentSeries}
              onChange={(e) =>
                setFormData({ ...formData, documentSeries: e.target.value })
              }
              required
            />
            <Input
              placeholder="Document Number"
              value={formData.documentNumber}
              onChange={(e) =>
                setFormData({ ...formData, documentNumber: e.target.value })
              }
              required
            />
            <Input
              placeholder="Residential Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gold hover:bg-gold/90 text-white">
              Confirm Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};