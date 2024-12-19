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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  onFilter: (filters: {
    priceRange: [number, number];
    type: string;
    date: Date | undefined;
  }) => void;
}

export const SearchFilters = ({ onFilter }: SearchFiltersProps) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState<Date>();

  const handleFilter = () => {
    onFilter({
      priceRange: [Number(minPrice) || 0, Number(maxPrice) || Infinity],
      type,
      date,
    });
  };

  return (
    <div className="glass-card p-6 rounded-lg space-y-4 fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Min Price</label>
          <Input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Max Price</label>
          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Room Type</label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="semi-luxury">Semi-Luxury</SelectItem>
              <SelectItem value="ordinary">Ordinary</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Check-in Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Button
        onClick={handleFilter}
        className="w-full bg-gold hover:bg-gold/90 text-white"
      >
        Search Rooms
      </Button>
    </div>
  );
};