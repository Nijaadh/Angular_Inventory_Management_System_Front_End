import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin.component';
import { ProfileComponent } from './profile.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"profile",component:ProfileComponent,children:[
      {path:"customermanagement",component:CustomerManagementComponent},
      {path:"employeemanagement",component:EmployeeManagementComponent},
    ]}
  ]},

  // {path:"cus",component:CustomerManagementComponent},
  // {path:"emp",component:EmployeeManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
