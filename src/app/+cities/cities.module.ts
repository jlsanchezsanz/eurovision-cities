import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material';

import { CitiesContainerComponent, CitiesTableComponent } from './components';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesEffects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    EffectsModule.forFeature([CitiesEffects]),
    MatTableModule
  ],
  declarations: [CitiesContainerComponent, CitiesTableComponent],
})
export class CitiesModule {}
