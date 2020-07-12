import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities-container.component.html',
  styleUrls: ['./cities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
