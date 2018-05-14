import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';

import { Product } from '../../../models/Product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  products: any;
  displayedColumns = ["productName", "seller", "productNumber", "price", "category", "editProduct", "deleteProduct"]

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(
        productData => {
          this.products = productData
        }
      )
  }

}
