import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { BusinessHubComponent } from './business-hub.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { AgencyManagementComponent } from './agency-management/agency-management.component';
import { SaleseRepManagementComponent } from './salese-rep-management/salese-rep-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PriceManagementComponent } from './price-management/price-management.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"hub",component:BusinessHubComponent,children:[
      {path:"companymanagement",component:CompanyManagementComponent},
      {path:"brandmanagement",component:BrandManagementComponent},
      {path:"agencymanagement",component:AgencyManagementComponent},
      {path:"rep",component:SaleseRepManagementComponent},
      {path:"productmanagement",component:ProductManagementComponent},
      {path:"pricemanagement",component:PriceManagementComponent},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessHubRoutingModule { }
