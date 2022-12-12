import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss'],
})
export class DisplayProductComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private db: AngularFirestore
  ) {
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

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    //this.products = this.productService.getProducts();
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
    this.updateData();
  }

  updateData() {
    this.db
      .collection<Product>('products')
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
}
