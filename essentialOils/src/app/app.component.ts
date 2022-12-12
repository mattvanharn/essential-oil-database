import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
interface essentialOilsData {
  name: string;
  description: string;
  uses: [];
  benefits: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialogRef: MatDialog) {}

  addProduct() {
    alert('You pressed the button');
    throw new Error('Method not implemented.');
  }
  title = 'essentialOils';
  openDialog() {
    this.dialogRef.open(AddProductComponent);
  }
}
