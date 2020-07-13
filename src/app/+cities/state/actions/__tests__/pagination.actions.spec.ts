import * as fromPagination from '../pagination.actions';

import { citiesResponseMock } from '../../../../mocks';

describe('Update pagination', () => {
  it('should return update pagination action', () => {
    expect(
      fromPagination.updatePagination({ paginationInfo: citiesResponseMock })
        .type
    ).toBe('[Pagination] Update');
  });
});
