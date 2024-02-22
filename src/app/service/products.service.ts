import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/class/product';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(){
    return this.http.get<Product[]>("./assets/products.json");
  }

  public getProductsFromAdmin(params?: any) {
    return this.http.get<any>('./assets/products.json', { params: params }).toPromise();
  }
}
