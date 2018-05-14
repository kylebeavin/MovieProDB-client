import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductService } from '../../../../services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  @Input() product: object;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DeleteProductCompDialog, {
      width: '250px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }
}

@Component({
  selector: 'delete-product-comp-dialog',
  templateUrl: 'delete-product-comp-dialog.html',
})
export class DeleteProductCompDialog {
  constructor(private _productService: ProductService, public dialogRef: MatDialogRef<DeleteProductCompDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  onSubmitUpdate() {
    this._productService.deleteProduct(this.data)
    location.reload();
  }

  onNoClick(): void {
    location.reload();
    this.dialogRef.close();
  }
}