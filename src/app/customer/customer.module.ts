import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { WhyusComponent } from './whyus/whyus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    WhyusComponent,
    TestimonialComponent,
    ContactusComponent,
    LoginComponent,
    CartComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
