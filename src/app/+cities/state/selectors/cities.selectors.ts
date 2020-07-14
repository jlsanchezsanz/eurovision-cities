import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitiesState, citiesFeatureKey } from '../reducers';
import { getPage } from './pagination.selectors';

export const getCitiesState = createFeatureSelector<CitiesState>(
  citiesFeatureKey
);

export const getCities = createSelector(
  getCitiesState,
  getPage,
  ({ cities }, page) => cities[page]
);
