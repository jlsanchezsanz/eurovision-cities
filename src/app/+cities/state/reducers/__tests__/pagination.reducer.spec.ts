import {
  paginationReducer,
  paginationInitialState,
} from '../pagination.reducer';
import { updatePagination, updatePage } from '../../actions';
import { citiesResponseMock } from '../../../../mocks';

describe('Pagination Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = paginationReducer(paginationInitialState, action);

      expect(result).toBe(paginationInitialState);
    });
  });

  it('should update totalElements value', () => {
    const { totalElements } = citiesResponseMock;
    const result = paginationReducer(
      paginationInitialState,
      updatePagination({ paginationInfo: citiesResponseMock })
    );
    expect(result).toEqual({
      ...paginationInitialState,
      totalElements,
    });
  });

  it('should update page value', () => {
    const page = 3;
    const result = paginationReducer(
      paginationInitialState,
      updatePage({ page })
    );
    expect(result).toEqual({
      ...paginationInitialState,
      page,
    });
  });
});
