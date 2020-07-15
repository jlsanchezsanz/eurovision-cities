import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../state/reducers';
import { fetchCities } from '../../state/actions';
import { City } from '../../../models';
import { getCities } from '../../state/selectors';

@Component({
  selector: 'app-cities-container',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  public cities$: Observable<City[]>;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.cities$ = this.store.pipe(select(getCities));
    this.store.dispatch(fetchCities({ page: 0, size: 10 }));
  }
}
