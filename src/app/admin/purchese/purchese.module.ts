import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurcheseRoutingModule } from './purchese-routing.module';
import { PurcheseComponent } from './purchese.component';


@NgModule({
  declarations: [
    PurcheseComponent
  ],
  imports: [
    CommonModule,
    PurcheseRoutingModule
  ]
})
export class PurcheseModule { }
