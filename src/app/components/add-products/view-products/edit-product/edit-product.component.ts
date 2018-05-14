import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../../../../services/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Input() product: object;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(EditProductCompDialog, {
      width: '250px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }
}

@Component({
  selector: 'edit-product-comp-dialog',
  templateUrl: 'edit-product-comp-dialog.html',
})
export class EditProductCompDialog {
  categories = ['Vehicles','Clothing','Accessories','Makeup','Memorabilia']

  constructor(private _productService: ProductService, public dialogRef: MatDialogRef<EditProductCompDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  onSubmitUpdate() {
    this._productService.updateProduct(this.data)
  }

  onNoClick(): void {
    location.reload();
    this.dialogRef.close();
  }
}