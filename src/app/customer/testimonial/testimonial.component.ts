import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials: any[] = []; // Add your testimonial data here
  currentTestimonialIndex: number = 0;

  constructor() {
    // Initialize testimonials array with your data
    this.testimonials = [
      {
        name: "MANAGER",
        description: "I had a great time eating delicious food at your restaurant. The waiters and waitresses were committed to great service and were very friendly. The atmosphere was awesome and I definitely liked that you have a very modern style. Most importantly, every food and drink on your menu tasted great!",
        image:"../../../assets/img/myDp.jpg",
        rating:3
      },
      {
        name: "worker",
        description: "I had a great time eating delicious food at your restaurant. ",
        image:"../../../assets/img/perfil.jpg",
        rating:4
      },
      // 
      {
        name: "employee",
        description: " every food and drink on your menu tasted great!",
        image:"../../../assets/img/myDp.jpg",
        rating:2
      },
      // 
      {
        name: "student",
        description: " The waiters and waitresses were committed to great service and were very friendly. The atmosphere was awesome and I definitely liked that you have a very modern style. Most importantly, every food and drink on your menu tasted great!",
        image:"../../../assets/img/myDp.jpg",
        rating:5
      },
      // 
      // Add more testimonials here as needed
    ];
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
