import { Action, createReducer, on } from '@ngrx/store';

import { City } from '../../../models';
import { fetchCities, fetchCitiesSuccess, fetchCitiesError } from '../actions';

export const citiesFeatureKey = 'cities';

export interface State {
  cities: City[];
  loading: boolean;
  error?: any;
}

export const initialState: State = {
  cities: [],
  loading: false
};

const _citiesReducer = createReducer(
  initialState,
  on(fetchCities, (state) => ({ ...state, loading: true, error: undefined })),
  on(fetchCitiesSuccess, (state, { cities }) => ({
    ...state,
    loading: false,
    cities
  })),
  on(fetchCitiesError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export function citiesReducer(state: State, action: Action) {
  return _citiesReducer(state, action);
}