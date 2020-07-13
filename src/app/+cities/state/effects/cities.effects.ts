import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { fetchCities, fetchCitiesSuccess, fetchCitiesError } from '../actions';
import { CitiesService } from '../../../services';
import { CitiesResponse } from '../../../models';

@Injectable()
export class CitiesEffects {
  public fetchCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCities),
      switchMap(() =>
        this.citiesService.getCities(1, 10).pipe(
          map((citiesResponse: CitiesResponse) =>
            fetchCitiesSuccess({ citiesResponse })
          ),
          catchError((error) => of(fetchCitiesError(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private citiesService: CitiesService
  ) {}
}
