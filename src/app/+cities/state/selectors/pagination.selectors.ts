import { createSelector, createFeatureSelector } from '@ngrx/store';

import { paginationFeatureKey, PaginationState } from '../reducers';

export const getPaginationState = createFeatureSelector<PaginationState>(
  paginationFeatureKey
);

export const getPage = createSelector(
  getPaginationState,
  (pagination) => pagination && pagination.page
);

export const getPageSize = createSelector(
  getPaginationState,
  (pagination) => pagination && pagination.size
);

export const getTotalElements = createSelector(
  getPaginationState,
  (pagination) => pagination && pagination.totalElements
);
