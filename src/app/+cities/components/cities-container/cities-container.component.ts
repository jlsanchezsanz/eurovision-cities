import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';

import { State } from '../../../state/reducers';
import { fetchCities, updatePage } from '../../state/actions';
import { City } from '../../../models';
import { getCities } from '../../state/selectors';
import {
  getPage,
  getPageSize,
  getTotalElements,
} from '../../state/selectors/pagination.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cities-container',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  public cities$: Observable<City[]>;
  public page$: Observable<number>;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageSize$: Observable<number>;
  public totalElements$: Observable<number>;

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.cities$ = this.store.pipe(select(getCities));
    this.page$ = this.store.pipe(select(getPage));
    this.pageSize$ = this.store.pipe(select(getPageSize));
    this.totalElements$ = this.store.pipe(select(getTotalElements));
    this.fetchCities();
  }

  public onPageChange(pageEvent: PageEvent): void {
    const { pageIndex: page } = pageEvent;
    this.store.dispatch(updatePage({ page }));
  }

  private fetchCities(): void {
    combineLatest(this.page$, this.pageSize$)
      .pipe(take(1))
      .subscribe(([page, size]) =>
        this.store.dispatch(fetchCities({ page, size }))
      );
  }
}
