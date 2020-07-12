import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesContainerComponent } from './components';
import { CitiesRoutingModule } from './cities-routing.module';

@NgModule({
  imports: [CommonModule, CitiesRoutingModule],
  declarations: [CitiesContainerComponent],
})
export class CitiesModule {}
