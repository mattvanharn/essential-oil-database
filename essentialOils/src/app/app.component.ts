import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addProduct() {
    alert("You pressed the button");
    throw new Error('Method not implemented.');
  }
  title = 'essentialOils';
  openDialog() {
    this.dialogRef.open(AddProductComponent);
  }
  constructor(private dialogRef: MatDialog) { }
}
