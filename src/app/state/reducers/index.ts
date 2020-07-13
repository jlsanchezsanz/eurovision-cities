import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import {
  citiesReducer,
  CitiesState,
  paginationReducer,
  PaginationState,
} from '../../+cities/state/reducers';

export interface State {
  cities: CitiesState;
  pagination: PaginationState;
}

export const reducers: ActionReducerMap<State> = {
  cities: citiesReducer,
  pagination: paginationReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
