import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  exports: [MenuComponent]
})
export class MenuModule {}
