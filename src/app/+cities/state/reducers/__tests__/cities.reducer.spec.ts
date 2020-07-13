import { citiesReducer, initialState } from '../cities.reducer';
import {
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesError,
} from '../../actions';
import { citiesResponseMock } from '../../../../mocks';
import { state } from '@angular/animations';

describe('Cities Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = citiesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('should update loading and error on fetch', () => {
    const result = citiesReducer(initialState, fetchCities());
    expect(result).toEqual({
      ...initialState,
      loading: true,
      error: undefined,
    });
  });

  it('should update loading, cities and pagination on fetch success', () => {
    const {
      content,
      pageable: { pageNumber },
    } = citiesResponseMock;
    const result = citiesReducer(
      initialState,
      fetchCitiesSuccess({ citiesResponse: citiesResponseMock })
    );
    expect(result).toEqual({
      ...initialState,
      loading: false,
      cities: {
        ...initialState.cities,
        [pageNumber]: content,
      },
    });
  });

  it('should update loading and error on fetch error', () => {
    const error = { message: '' };
    const result = citiesReducer(initialState, fetchCitiesError({ error }));
    expect(result).toEqual({
      ...initialState,
      loading: false,
      error,
    });
  });
});
