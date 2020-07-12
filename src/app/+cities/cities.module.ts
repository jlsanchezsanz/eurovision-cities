import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { CitiesContainerComponent } from './components';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesEffects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    EffectsModule.forFeature([CitiesEffects]),
  ],
  declarations: [CitiesContainerComponent],
})
export class CitiesModule {}
