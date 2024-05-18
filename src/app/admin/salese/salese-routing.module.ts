import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { PurcheseComponent } from '../purchese/purchese.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"sales",component:PurcheseComponent,children:[
      {path:"invoice",component:InvoiceComponent},
     
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleseRoutingModule { }
