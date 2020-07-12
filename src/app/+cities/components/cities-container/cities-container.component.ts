import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../state/reducers/index';
import { fetchCities } from '../../state/actions';
import { City } from '../../../models';
import { getCities } from '../../state/selectors';

@Component({
  selector: 'app-cities',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  public cities$: Observable<City[]>;

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(fetchCities());
    this.cities$ = this.store.pipe(select(getCities));
  }
}
