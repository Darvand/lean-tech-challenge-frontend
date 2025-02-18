export interface EventCreation {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    latitude: number;
    longitude: number;
  };
  tickets: {
    type: string;
    price: number;
    available: number;
    purchaseLimit: number;
    benefits: string[];
  }[];
}
