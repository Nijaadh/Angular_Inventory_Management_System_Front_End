import { Component, OnInit } from '@angular/core';
import { Item } from './Models/item.model';
import { ItemService } from './Services/item.service';


enum CommonStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETE = "delete",
}


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent implements OnInit{

  public isHiddenAddItemContainer: boolean = false;

  public items:Item[] = [];

  item:Item={
    itemId: "0",
    itemName: "",
    itemDiscription: "",
    itemQty: 0,
    item_reorderLevel: 0,
    itemPrice: 0.0,
    itemImage: "",
    itemCatId: 0,
    itemComId: 0,
    itemCommonStatus: CommonStatus.ACTIVE// Use a valid CommonStatus value
  };




  constructor(private _itemService: ItemService){
  
  }


  ngOnInit(): void {
    this.isHiddenAddItemContainer=true;

  }


  addItem():void{
    this._itemService.addItem(this.item).subscribe((addedItem)=>{
      this.item={
        itemId: "0",
        itemName: "",
        itemDiscription: "",
        itemQty: 0,
        item_reorderLevel: 0,
        itemPrice: 0.0,
        itemImage: "",
        itemCatId: 0,
        itemComId: 0,
        itemCommonStatus: CommonStatus.ACTIVE// Use a valid CommonStatus value
      }
    })
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
