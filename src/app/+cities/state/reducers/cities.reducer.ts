import { Action, createReducer, on } from '@ngrx/store';

import { City } from '../../../models';
import { fetchCities, fetchCitiesSuccess, fetchCitiesError } from '../actions';
import { Pagination } from '../../models';

export const citiesFeatureKey = 'cities';

export interface CitiesState {
  cities: City[];
  pagination: Pagination;
  loading: boolean;
  error?: any;
}

export const initialState: CitiesState = {
  cities: [],
  pagination: undefined,
  loading: false,
};

const _citiesReducer = createReducer(
  initialState,
  on(fetchCities, (state) => ({ ...state, loading: true, error: undefined })),
  on(
    fetchCitiesSuccess,
    (
      state,
      {
        citiesResponse: {
          content,
          pageable: { pageNumber },
          size,
          totalElements,
        },
      }
    ) => ({
      ...state,
      loading: false,
      cities: content,
      pagination: {
        pageNumber,
        size,
        totalElements,
      },
    })
  ),
  on(fetchCitiesError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function citiesReducer(state: CitiesState, action: Action) {
  return _citiesReducer(state, action);
}
