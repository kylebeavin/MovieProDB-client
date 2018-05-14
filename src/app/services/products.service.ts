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

  getAllProducts() {
    return this._http.get(Api_Url)
  }

  updateProduct(productUpdate: Product) {
    this._http.put(`${Api_Url}/${productUpdate.id}`, {'product': productUpdate})
      .subscribe(res => {
        console.log(res)
      })
  }

  deleteProduct(deletedProduct: Product) {
    return this._http.delete(`${Api_Url}/delete/${deletedProduct.id}`)
      .subscribe(res => console.log('Deleted'))
  }
}