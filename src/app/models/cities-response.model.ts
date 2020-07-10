import { City } from './city.model';

export interface CitiesResponse {
  content: City[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
