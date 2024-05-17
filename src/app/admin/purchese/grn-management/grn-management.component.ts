import { Component, OnInit } from '@angular/core';
import { Grn } from './Models/grn.model';

@Component({
  selector: 'app-grn-management',
  templateUrl: './grn-management.component.html',
  styleUrl: './grn-management.component.scss'
})
export class GrnManagementComponent implements OnInit{
  
  grns:Grn[]=[];
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
