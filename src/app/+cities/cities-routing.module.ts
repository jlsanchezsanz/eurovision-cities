import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CitiesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitiesRoutingModule {}
