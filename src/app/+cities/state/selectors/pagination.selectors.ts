import { createSelector } from '@ngrx/store';

import { getCitiesState } from './cities.selectors';

const getPagination = createSelector(
  getCitiesState,
  ({ pagination }) => pagination
);

export const getPageNumber = createSelector(
  getPagination,
  (pagination) => pagination && pagination.pageNumber
);

export const getPageSize = createSelector(
  getPagination,
  (pagination) => pagination && pagination.size
);

export const getTotalElements = createSelector(
  getPagination,
  (pagination) => pagination && pagination.totalElements
);
