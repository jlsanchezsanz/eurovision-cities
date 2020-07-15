import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { citiesReducer, CitiesState } from '../../+cities/state/reducers';

export interface State {
  cities: CitiesState;
}

export const reducers: ActionReducerMap<State> = {
  cities: citiesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
