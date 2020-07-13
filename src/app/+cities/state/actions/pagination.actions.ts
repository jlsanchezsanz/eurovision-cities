import { createAction, props } from '@ngrx/store';

import { CitiesResponse } from '../../../models';

export const updatePagination = createAction(
  '[Pagination] Update',
  props<{ paginationInfo: CitiesResponse }>()
);
