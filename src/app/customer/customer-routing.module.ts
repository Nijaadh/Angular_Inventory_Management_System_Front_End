import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WhyusComponent } from './whyus/whyus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"customer",component:CustomerComponent,children:[
    {path:"home",component:HomeComponent,children:[
      {path:"whyus#whyus",component:WhyusComponent}
    ]},
    {path:"cart",component:CartComponent},
    {path:"home#whyus",component:WhyusComponent},
    {path:"home#testimonial",component:TestimonialComponent},
    {path:"home#contactus",component:ContactusComponent},

    {path:"login",component:LoginComponent}
  ]},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
