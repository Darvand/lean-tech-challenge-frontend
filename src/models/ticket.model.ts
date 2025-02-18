export interface Ticket {
  id: string;
  type: string;
  price: number;
  available: number;
  purchaseLimit: number;
  benefits: string[];
}
