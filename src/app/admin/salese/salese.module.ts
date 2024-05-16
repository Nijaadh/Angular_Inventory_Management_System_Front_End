import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleseRoutingModule } from './salese-routing.module';
import { SaleseComponent } from './salese.component';


@NgModule({
  declarations: [
    SaleseComponent
  ],
  imports: [
    CommonModule,
    SaleseRoutingModule
  ]
})
export class SaleseModule { }
