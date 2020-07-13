import { createAction, props } from '@ngrx/store';

import { CitiesResponse } from '../../../models';

export const fetchCities = createAction(
  '[Cities] Fetch',
  props<{ page: number, size: number }>()
);

export const fetchCitiesSuccess = createAction(
  '[Cities] Fetch success',
  props<{ citiesResponse: CitiesResponse }>()
);

export const fetchCitiesError = createAction(
  '[Cities] Fetch error',
  props<{ error: any }>()
);
