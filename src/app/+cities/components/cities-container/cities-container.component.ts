import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../../state/reducers/index';
import { fetchCities } from '../../state/actions';

@Component({
  selector: 'app-cities',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(fetchCities());
  }
}
