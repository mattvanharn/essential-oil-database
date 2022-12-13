import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss'],
})
export class DisplayProductComponent {
  products: Product[] = [];

  constructor(private dialogRef: MatDialog, private db: AngularFirestore) {
    db.firestore.settings({ experimentalForceLongPolling: true });
    db.collection<Product>('products')
      .valueChanges()
      .subscribe((items) => {
        if (items) {
          this.products = [];
          items.forEach((doc) => {
            this.products.push(doc);
          });
        }
        console.log(this.products[0].uses);
      });
  }

  openEditDialog(product: Product) {
    this.dialogRef.open(EditProductComponent, {
      data: {
        name: product.name,
        description: product.description,
        uses: product.uses,
        benefits: product.benefits,
      },
    });
  }

  deleteProduct(product: Product): void {
    this.db
      .doc('/products/' + product.name.replace(/\s/g, '').toLowerCase())
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((err) => {
        console.error('Error removing doc: ', err);
      });
  }
}
