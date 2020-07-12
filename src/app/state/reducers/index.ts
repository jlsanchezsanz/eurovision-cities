import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { citiesReducer } from '../../+cities/state/reducers';

export interface State {
  cities: any;
}

export const reducers: ActionReducerMap<State> = {
  cities: citiesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
