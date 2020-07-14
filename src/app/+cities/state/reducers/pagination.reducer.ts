import { Action, createReducer, on } from '@ngrx/store';

import { updatePagination, updatePage } from '../actions';
import { Pagination } from '../../models';

export const paginationFeatureKey = 'pagination';

export interface PaginationState extends Pagination {}

export const paginationInitialState: PaginationState = { page: 0, size: 10 };

const _paginationReducer = createReducer(
  paginationInitialState,
  on(updatePagination, (state, { paginationInfo: { totalElements } }) => ({
    ...state,
    totalElements,
  })),
  on(updatePage, (state, { page }) => ({ ...state, page }))
);

export function paginationReducer(state: PaginationState, action: Action) {
  return _paginationReducer(state, action);
}
