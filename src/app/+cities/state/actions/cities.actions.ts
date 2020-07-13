import { createAction, props } from '@ngrx/store';

import { CitiesResponse } from '../../../models';

export const fetchCities = createAction('[Cities] Fetch');

export const fetchCitiesSuccess = createAction(
  '[Cities] Fetch success',
  props<{ citiesResponse: CitiesResponse }>()
);

export const fetchCitiesError = createAction(
  '[Cities] Fetch error',
  props<{ error: any }>()
);
