import { Action, createReducer, on } from '@ngrx/store';

import { updatePagination } from '../actions';
import { Pagination } from '../../models';

export const paginationFeatureKey = 'pagination';

export interface PaginationState extends Pagination {}

export const paginationInitialState: PaginationState = undefined;

const _paginationReducer = createReducer(
  paginationInitialState,
  on(
    updatePagination,
    (
      state,
      {
        paginationInfo: {
          pageable: { pageNumber },
          size,
          totalElements,
        },
      }
    ) => ({
      ...state,
      pageNumber,
      size,
      totalElements,
    })
  )
);

export function paginationReducer(state: PaginationState, action: Action) {
  return _paginationReducer(state, action);
}
