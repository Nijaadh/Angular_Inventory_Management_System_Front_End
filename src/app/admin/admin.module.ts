import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BusinessHubModule } from './business-hub/business-hub.module';
import { PurcheseModule } from './purchese/purchese.module';
import { SaleseModule } from './salese/salese.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule,
    ProfileModule,

    
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BusinessHubModule,
    PurcheseModule,
    SaleseModule

  ],
  providers: []
 
})
export class AdminModule { }
