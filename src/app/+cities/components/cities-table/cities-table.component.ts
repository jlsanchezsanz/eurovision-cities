import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { City } from '../../../models';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesTableComponent {
  @Input() public cities: City[];

  public displayedColumns: string[] = ['id', 'name'];
}
