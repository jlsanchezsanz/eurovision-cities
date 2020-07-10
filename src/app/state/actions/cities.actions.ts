import { createAction, props } from '@ngrx/store';

import { City } from '../../models';

export const fetchCities = createAction('[Cities] Fetch');

export const fetchCitiesSuccess = createAction(
  '[Cities] Fetch success',
  props<{ cities: City[] }>()
);

export const fetchCitiesError = createAction(
  '[Cities] Fetch error',
  props<{ error: any }>()
);
