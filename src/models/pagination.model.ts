export interface Pagination<T> {
  items: T[];
  total: number;
  limit: number;
  page: number;
}
