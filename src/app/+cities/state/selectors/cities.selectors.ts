import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitiesState, citiesFeatureKey } from '../reducers';
import { getPageNumber } from './pagination.selectors';

export const getCitiesState = createFeatureSelector<CitiesState>(
  citiesFeatureKey
);

export const getCities = createSelector(
  getCitiesState,
  getPageNumber,
  ({ cities }, pageNumber) => cities[pageNumber]
);
