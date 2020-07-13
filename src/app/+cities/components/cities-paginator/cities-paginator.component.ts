import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cities-paginator',
  templateUrl: './cities-paginator.component.html',
  styleUrls: ['./cities-paginator.component.scss'],
})
export class CitiesPaginatorComponent {
  @Input() public pageNumber: number;
  @Input() public pageSizeOptions: number[];
  @Input() public size: number;
  @Input() public totalElements: number;
}
