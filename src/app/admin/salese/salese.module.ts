import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleseRoutingModule } from './salese-routing.module';
import { SaleseComponent } from './salese.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SaleseComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    SaleseRoutingModule,
    FormsModule
  ]
})
export class SaleseModule { }
