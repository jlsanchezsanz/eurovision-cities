import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

import {
  CitiesContainerComponent,
  CitiesPaginatorComponent,
  CitiesTableComponent,
} from './components';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesEffects, PaginationEffects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    EffectsModule.forFeature([CitiesEffects, PaginationEffects]),
    MatPaginatorModule,
    MatTableModule,
  ],
  declarations: [
    CitiesContainerComponent,
    CitiesPaginatorComponent,
    CitiesTableComponent,
  ],
})
export class CitiesModule {}
