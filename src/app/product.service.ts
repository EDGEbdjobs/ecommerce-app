import { Injectable } from '@angular/core';
import { IProduct } from './Models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {
   }

    url:string = 'https://localhost:7258/api/products'

   getProducts(){

    return this.httpClient.get<IProduct[]>(this.url);
   }

   addProduct(product:IProduct):Observable<IProduct>{
    
      return this.httpClient.post<IProduct>(this.url,product);
   }


}
