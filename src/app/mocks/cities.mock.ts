import { CitiesResponse } from '../models';

export const citiesResponseMock: CitiesResponse = {
  content: [
    { id: 317, name: 'Ahvaz' },
    { id: 87, name: 'Al-Jizah' },
    { id: 147, name: 'Al-Khartum Bahri' },
    { id: 227, name: 'Al-Madinah' },
    { id: 103, name: 'Aleppo' },
    { id: 47, name: 'Alexandria' },
    { id: 176, name: 'Algiers' },
    { id: 307, name: 'Allahabad' },
    { id: 302, name: 'Almaty' },
    { id: 260, name: 'Amman' },
  ],
  totalPages: 34,
  totalElements: 332,
  last: false,
  first: false,
  numberOfElements: 10,
  size: 10,
  number: 1,
  empty: false,
};
