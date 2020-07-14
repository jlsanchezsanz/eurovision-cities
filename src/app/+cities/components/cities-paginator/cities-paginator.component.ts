import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-cities-paginator',
  templateUrl: './cities-paginator.component.html',
  styleUrls: ['./cities-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesPaginatorComponent {
  @Input() public pageNumber: number;
  @Input() public pageSizeOptions: number[];
  @Input() public size: number;
  @Input() public totalElements: number;
  @Output() public pageChange: EventEmitter<PageEvent> = new EventEmitter();

  public onPageChange(pageEvent: PageEvent): void {
    this.pageChange.emit(pageEvent);
  }
}
