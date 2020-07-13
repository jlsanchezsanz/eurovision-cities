import { Action, createReducer, on } from '@ngrx/store';

import { City } from '../../../models';
import { fetchCities, fetchCitiesSuccess, fetchCitiesError } from '../actions';

export const citiesFeatureKey = 'cities';

export interface CitiesState {
  cities: { [key: number]: City[] };
  loading: boolean;
  error?: any;
}

export const initialState: CitiesState = {
  cities: [],
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
        },
      }
    ) => ({
      ...state,
      loading: false,
      cities: { ...state.cities, [pageNumber]: content },
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
