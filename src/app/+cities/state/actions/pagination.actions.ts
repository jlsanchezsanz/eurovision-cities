import { createAction, props } from '@ngrx/store';

import { CitiesResponse } from '../../../models';

export const updatePagination = createAction(
  '[Pagination] Update',
  props<{ paginationInfo: CitiesResponse }>()
);

export const updatePage = createAction(
  '[Pagination] Update page',
  props<{ page: number }>()
);
