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
  public productName = '';
  public productDescription = '';
  public productUses = {};
  public productBenefits = {};

  constructor(private db: AngularFirestore, private dialogRef: MatDialog) {
    db.firestore.settings({ experimentalForceLongPolling: true });
    db.doc<essentialOilsData>('/products/clarysage')
      .valueChanges()
      .subscribe((result) => {
        if (result) {
          console.log(result.benefits);
          this.productName = result.name;
          this.productDescription = result.description;
          db.doc('/products/clarysage/uses/usesDoc')
            .valueChanges()
            .subscribe((res) => {
              if (res) {
                console.log(res);
              }
            });
        }
      });
  }
  addProduct() {
    alert("You pressed the button");
    throw new Error('Method not implemented.');
  }
  title = 'essentialOils';
  openDialog() {
    this.dialogRef.open(AddProductComponent);
  }
}
