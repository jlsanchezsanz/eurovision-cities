import {
  paginationReducer,
  paginationInitialState,
} from '../pagination.reducer';
import { updatePagination } from '../../actions';
import { citiesResponseMock } from '../../../../mocks';

describe('Pagination Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = paginationReducer(paginationInitialState, action);

      expect(result).toBe(paginationInitialState);
    });
  });

  it('should update pagination', () => {
    const {
      pageable: { pageNumber },
      size,
      totalElements,
    } = citiesResponseMock;
    const result = paginationReducer(
      paginationInitialState,
      updatePagination({ paginationInfo: citiesResponseMock })
    );
    expect(result).toEqual({
      ...paginationInitialState,
      pageNumber,
      size,
      totalElements,
    });
  });
});
