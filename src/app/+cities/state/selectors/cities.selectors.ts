import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitiesState } from '../reducers';

export const getCitiesState = createFeatureSelector<CitiesState>('cities');

export const getCities = createSelector(getCitiesState, ({ cities }) => cities);
