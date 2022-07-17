import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule { }
