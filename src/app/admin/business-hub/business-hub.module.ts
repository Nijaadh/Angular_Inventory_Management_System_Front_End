import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessHubRoutingModule } from './business-hub-routing.module';
import { BusinessHubComponent } from './business-hub.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { AgencyManagementComponent } from './agency-management/agency-management.component';
import { SaleseRepManagementComponent } from './salese-rep-management/salese-rep-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PriceManagementComponent } from './price-management/price-management.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CompanyDetailCardComponent } from './company-management/Components/company-detail-card/company-detail-card.component';
import { CompanyService } from './company-management/Services/company.service';
import { provideRouter, ROUTES } from '@angular/router';



@NgModule({
  declarations: [
    BusinessHubComponent,
    CompanyManagementComponent,
    BrandManagementComponent,
    AgencyManagementComponent,
    SaleseRepManagementComponent,
    ProductManagementComponent,
    PriceManagementComponent,
    CompanyDetailCardComponent
  ],
  imports: [
    CommonModule,
    BusinessHubRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    CompanyService,
    provideHttpClient()  // Ensure CompanyService is provided here
  ],
  
})
export class BusinessHubModule { }
