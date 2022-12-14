import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<Product[]>;
  constructor(private db: AngularFirestore) {
    this.db.firestore.settings({ experimentalForceLongPolling: true });
    this.products$ = this.db.collection<Product>('products').valueChanges();
  }

  getProducts$(): Observable<Product[]> {
    console.log("got products");
    return this.db.collection<Product>('products').valueChanges();
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
    const path: string = name.replace(/\s/g, '').toLowerCase();
    this.db
      .doc('/products/' + path)
      .set({
        name: name,
        description: description,
        uses: [
          uses.value.diffuser,
          uses.value.ingestion,
          uses.value.inhilation,
          uses.value.dryEvaporation,
          uses.value.skin,
          uses.value.bathAndShower,
          uses.value.humidifier,
          uses.value.surfaceCleaning,
        ],
        benefits: [
          benefits.value.relaxation,
          benefits.value.digestion,
          benefits.value.calming,
          benefits.value.stressRelief,
          benefits.value.painRelief,
          benefits.value.sleepAid,
          benefits.value.moodImprovement,
          benefits.value.energyBoost,
          benefits.value.skinAndHairHealth,
          benefits.value.hormoneBalance,
        ],
      })
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }
}
