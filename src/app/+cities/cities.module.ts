import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import {
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
} from '@angular/material';

import { CitiesContainerComponent, CitiesTableComponent } from './components';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesEffects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    EffectsModule.forFeature([CitiesEffects]),
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [CitiesContainerComponent, CitiesTableComponent],
})
export class CitiesModule {}
