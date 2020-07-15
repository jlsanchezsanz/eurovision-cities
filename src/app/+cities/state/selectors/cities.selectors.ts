import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CitiesState, citiesFeatureKey } from '../reducers';

export const getCitiesState = createFeatureSelector<CitiesState>(
  citiesFeatureKey
);

export const getCities = createSelector(getCitiesState, ({ cities }) => cities);
