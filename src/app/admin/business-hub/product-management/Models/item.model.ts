enum CommonStatus{
ACTIVE="active",
INACTIVE= "inactive",
DELETE="delete",

}
export class Item {
    itemId: string = "";
    itemName: string = "";
    itemDiscription: string = "";
    itemQty: number = 0;
    item_reorderLevel: number = 0;
    itemPrice: number = 0.0; // Assuming you want a number type for price
    itemImage: string = "";
    itemCatId: number = 0;
    itemComId: number = 0;
    itemCommonStatus: any | undefined = undefined; // Allow undefined as a valid value
}
