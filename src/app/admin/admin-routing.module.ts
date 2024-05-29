import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeManagementComponent } from './profile/employee-management/employee-management.component';
import { CustomerManagementComponent } from './profile/customer-management/customer-management.component';
import { CompanyManagementComponent } from './business-hub/company-management/company-management.component';
import { BrandManagementComponent } from './business-hub/brand-management/brand-management.component';
import { AgencyManagementComponent } from './business-hub/agency-management/agency-management.component';
import { SaleseRepManagementComponent } from './business-hub/salese-rep-management/salese-rep-management.component';
import { PurcheseComponent } from './purchese/purchese.component';
import { GrnManagementComponent } from './purchese/grn-management/grn-management.component';
import { InvoiceComponent } from './salese/invoice/invoice.component';
import { ProductManagementComponent } from './business-hub/product-management/product-management.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"profile",component:ProfileComponent,children:[
      {path:"employeemanagement",component:EmployeeManagementComponent},
      {path:"customermanagement",component:CustomerManagementComponent}
    ]},

    {path:"hub",component:ProfileComponent,children:[
      {path:"comapanymanagement",component:CompanyManagementComponent},
      {path:"brandmanagement",component:BrandManagementComponent},
      {path:"agencymanagement",component:AgencyManagementComponent},
      {path:"saleserepmanagement",component:SaleseRepManagementComponent},
      {path:"productmanagement",component:ProductManagementComponent},
    ]},

    {path:"purches",component:PurcheseComponent,children:[
      {path:"grnmanagement",component:GrnManagementComponent},
     
    ]},

    {path:"sales",component:PurcheseComponent,children:[
        {path:"invoice",component:InvoiceComponent},
       
    ]}
   
  ]},

  {path:"productmanagement",component:ProductManagementComponent},
       
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
