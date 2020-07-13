import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../state/reducers';
import { fetchCities } from '../../state/actions';
import { City } from '../../../models';
import { getCities } from '../../state/selectors';
import {
  getPageNumber,
  getPageSize,
  getTotalElements,
} from '../../state/selectors/pagination.selectors';

@Component({
  selector: 'app-cities-container',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  public cities$: Observable<City[]>;
  public pageNumber$: Observable<number>;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageSize$: Observable<number>;
  public totalElements$: Observable<number>;

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(fetchCities({ page: 0, size: 10 }));
    this.cities$ = this.store.pipe(select(getCities));
    this.pageNumber$ = this.store.pipe(select(getPageNumber));
    this.pageSize$ = this.store.pipe(select(getPageSize));
    this.totalElements$ = this.store.pipe(select(getTotalElements));
  }

  public onPageChange(pageEvent: PageEvent): void {
    const { pageIndex: page, pageSize: size } = pageEvent;
    this.store.dispatch(fetchCities({ page, size }));
  }
}
