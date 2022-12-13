import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PRODUCTS } from './mock-products';
import { FormGroup } from '@angular/forms';


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

  submitProduct(name: string, description: string, uses: FormGroup, benefits: FormGroup) {
    // const productArray: Object[] = this.products$.pipe(tap(product => this.products$ = product));
    // const id: number = this.genId(productArray);
    const path: string = name.replace(/\s/g, '').toLowerCase();
    // console.log('hi there', path);
    this.db
      .doc('/products/' + path)
      .set({
        // id: id;
        name: name,
        description: description,
        uses: [
          uses.value.diffuse,
          uses.value.ingest,
          uses.value.surfaceCleaning,
          uses.value.topical,
        ],
        benefits: [
          benefits.value.boostMood,
          benefits.value.inflammation,
          benefits.value.painRelief,
          benefits.value.sleep,
          benefits.value.stressRelief,
        ]
      })
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }

  // genId(productArray: Object[]): number {
  //   return productArray.length > 0 ? Math.max(...productArray.map(product => product.id)) + 1 : 11;
  // }
}

