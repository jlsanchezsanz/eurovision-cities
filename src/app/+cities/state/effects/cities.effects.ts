import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, filter } from 'rxjs/operators';

import { fetchCities, fetchCitiesSuccess, fetchCitiesError } from '../actions';
import { CitiesService } from '../../services';
import { CitiesResponse } from '../../../models';

@Injectable()
export class CitiesEffects {
  public fetchCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCities),
      switchMap(({ page, size }) =>
        this.citiesService.getCities(page, size).pipe(
          map((citiesResponse: CitiesResponse) =>
            fetchCitiesSuccess({ citiesResponse })
          ),
          catchError((error) => of(fetchCitiesError(error)))
        )
      )
    )
  );

  public fetchCitiesNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCitiesSuccess),
      map(({ citiesResponse: { last, number: page, size } }) => ({
        last,
        page,
        size,
      })),
      filter(({last}) => !last),
      map(({ page, size }) => fetchCities({ page: page + 1, size }))
    )
  );

  constructor(
    private actions$: Actions,
    private citiesService: CitiesService
  ) {}
}
