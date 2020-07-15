import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { City } from '../../../models';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesTableComponent implements AfterViewInit {
  @Input() public set cities(value: City[]) {
    this.dataSource.data = value;
  }
  @Input() public pageSizeOptions: number[];
  @Input() public size: number;
  @Input() public totalElements: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public dataSource: MatTableDataSource<City>;
  public displayedColumns: string[] = ['id', 'name'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.cities);
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
