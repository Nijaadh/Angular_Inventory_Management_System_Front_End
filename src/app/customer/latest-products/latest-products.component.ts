import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {
  products: Product[]=[];

  ngOnInit(): void {
    this.products = [
      { name: 'Product 1', image: 'assets/img/p1.png', price: 10 ,discription:'soo good'},
      { name: 'Product 2', image: 'assets/img/p3.png', price: 20 ,discription:'soo good'},
      { name: 'Product 3', image: 'assets/img/p4.png', price: 30 ,discription:'soo good'},
      { name: 'Product 4', image: 'assets/img/p5.png', price: 40 ,discription:'soo good'}
    ];
  }
}

class Product {
  name: string|undefined;
  image: string|undefined;
  price: number|undefined;
  discription: string|undefined;
}
