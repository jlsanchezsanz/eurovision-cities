import { citiesResponseMock } from '../../../../mocks';
import {
  getPage,
  getPageSize,
  getTotalElements,
} from '../pagination.selectors';

describe('Pagination Selectors', () => {
  const {
    number: page,
    size,
    totalElements,
  } = citiesResponseMock;

  describe('getPage', () => {
    it('should select page number value', () => {
      expect(getPage.projector({ page })).toBe(page);
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
