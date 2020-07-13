import { citiesResponseMock } from '../../../../mocks';
import {
  getPageNumber,
  getPageSize,
  getTotalElements,
} from '../pagination.selectors';

describe('Pagination Selectors', () => {
  const {
    pageable: { pageNumber },
    size,
    totalElements,
  } = citiesResponseMock;

  describe('getPageNumber', () => {
    it('should select page number value', () => {
      expect(getPageNumber.projector({ pageNumber })).toBe(pageNumber);
    });
  });

  describe('getPageSize', () => {
    it('should select size value', () => {
      expect(getPageSize.projector({ size })).toBe(size);
    });
  });

  describe('getTotalElements', () => {
    it('should select total elements value', () => {
      expect(getTotalElements.projector({ totalElements })).toBe(totalElements);
    });
  });
});
