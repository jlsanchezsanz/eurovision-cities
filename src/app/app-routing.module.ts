import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./+home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./+cities/cities.module').then((m) => m.CitiesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
