import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string="http://localhost:8080/api/v1/itemManagement/saveItem";
  constructor(private httpClient:HttpClient) { }

  addItem(newItem: Item):Observable<Item>{
    return this.httpClient.post<Item>(this.apiUrl,newItem);
  }
  
}
