import { Component, OnInit } from '@angular/core';
import { Item } from './Models/item.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent implements OnInit{

  items:Item[]=[];
  public isHiddenAddItemContainer: boolean = false;
  constructor(){

  }


  ngOnInit(): void {
    this.isHiddenAddItemContainer=true;

    this.items=[
      {
        itemComName:"Natures secret",
        itemId:"ITM-001",
        itemName:"Carrot f/w",
        itemComStatus:"ACTIVE"

      }
    ]
  }

  showANDhideAddItemContainer(): void {
    if (this.isHiddenAddItemContainer == true) {
      this.isHiddenAddItemContainer = false;
    }
    else if (this.isHiddenAddItemContainer == false) {
      this.isHiddenAddItemContainer = true;
    }


  }

}
