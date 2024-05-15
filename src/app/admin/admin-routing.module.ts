import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeManagementComponent } from './profile/employee-management/employee-management.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"profile",component:ProfileComponent,children:[
      {path:"employeemanagement",component:EmployeeManagementComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
