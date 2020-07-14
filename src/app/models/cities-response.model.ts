import { City } from './city.model';

export interface CitiesResponse {
  content: City[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}
