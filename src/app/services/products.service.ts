import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

const Api_Url = 'http://localhost:3000/api/products';

@Injectable()
export class ProductService {

  constructor(private _http:HttpClient) { }

  addProduct(newProduct: Product) {
    this._http.post(Api_Url, {'product': newProduct})
      .subscribe(res => {
        console.log(res)
      })
  }
}