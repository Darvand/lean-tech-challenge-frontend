import { Ticket } from "./ticket.model";

export interface EventDetail {
  id: string;
  title: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  location: {
    latitude: number;
    longitude: number;
  };
  tickets: Ticket[];
}
