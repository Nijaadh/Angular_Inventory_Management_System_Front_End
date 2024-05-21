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
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';


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
    SliderComponent,
    ChatbotComponent,
    LatestProductsComponent,
    Banner1Component,
    Banner2Component
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
