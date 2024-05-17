import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { PurcheseComponent } from './purchese.component';
import { GrnManagementComponent } from './grn-management/grn-management.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"purches",component:PurcheseComponent,children:[
      {path:"grnmanagement",component:GrnManagementComponent},
     
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurcheseRoutingModule { }
