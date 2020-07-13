import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { fetchCitiesSuccess, updatePagination } from '../actions';

@Injectable()
export class PaginationEffects {
  public updatePagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCitiesSuccess),
      map(({ citiesResponse }) =>
        updatePagination({ paginationInfo: citiesResponse })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
