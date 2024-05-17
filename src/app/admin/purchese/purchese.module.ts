import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurcheseRoutingModule } from './purchese-routing.module';
import { PurcheseComponent } from './purchese.component';
import { GrnManagementComponent } from './grn-management/grn-management.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurcheseComponent,
    GrnManagementComponent
  ],
  imports: [
    CommonModule,
    PurcheseRoutingModule,
    FormsModule
  ]
})
export class PurcheseModule { }
