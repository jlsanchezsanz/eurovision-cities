import * as fromPagination from '../pagination.actions';

import { citiesResponseMock } from '../../../../mocks';

describe('Pagination actions', () => {
  describe('Update pagination from API response', () => {
    it('should return update pagination action', () => {
      expect(
        fromPagination.updatePagination({ paginationInfo: citiesResponseMock })
          .type
      ).toBe('[Pagination] Update');
    });
  });

  describe('Update page', () => {
    it('should return update page action', () => {
      expect(fromPagination.updatePage({ page: 1 }).type).toBe(
        '[Pagination] Update page'
      );
    });
  });
});
