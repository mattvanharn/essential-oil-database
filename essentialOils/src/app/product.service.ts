import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PRODUCTS } from './mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$: Observable<Product[]>;
  constructor(private db: AngularFirestore) {
    this.db.firestore.settings({ experimentalForceLongPolling: true });
    this.products$ = this.db.collection<Product>('products')
      .valueChanges()
  }

  getProducts$(): Observable<Product[]> {
    return this.db.collection<Product>('products')
      .valueChanges()
  }

  deleteProduct(product$: Product): void {
    this.db
      .doc('/products/' + product$.name.replace(/\s/g, '').toLowerCase())
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((err) => {
        console.error('Error removing doc: ', err);
      });
  }
}
