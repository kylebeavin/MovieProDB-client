import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  categories = ['Vehicles','Clothing','Accessories','Makeup','Memorabilia']

  private _productForm: FormGroup;

  constructor(private _form: FormBuilder, private _productService: ProductService) { }

  ngOnInit() {
    this.createForm();
    document.getElementById("productNameField").focus();
  }

  createForm() {
    this._productForm = this._form.group({
      productName: new FormControl,
      seller: new FormControl,
      productNumber: new FormControl,
      price: new FormControl,
      category: new FormControl
    })
  }

  onSubmit() {
    this._productService.addProduct(this._productForm.value)
    this._productForm.reset();
    document.getElementById("productNameField").focus();
  }

}
