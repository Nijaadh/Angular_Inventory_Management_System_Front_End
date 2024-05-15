import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

import { EmployeeService } from './employee-management/services/employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomerManagementComponent,
    ProfileComponent,
    EmployeeManagementComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],

})
export class ProfileModule { 
  
}
