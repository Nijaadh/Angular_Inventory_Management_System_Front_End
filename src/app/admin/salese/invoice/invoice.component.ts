import { Component, OnInit } from '@angular/core';
import { Invoice } from './Models/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit{
 
  grns:Invoice[]=[];
  items:any;
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
