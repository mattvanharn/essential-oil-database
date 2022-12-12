import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { FormBuilder } from '@angular/forms';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public name: string = '';
  public description: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private db: AngularFirestore
  ) {}

  uses = this._formBuilder.group({
    diffuse: false,
    ingest: false,
    surfaceCleaning: false,
    topical: false,
  });

  benefits = this._formBuilder.group({
    boostMood: false,
    inflammation: false,
    painRelief: false,
    sleep: false,
    stressRelief: false,
  });

  ngOnInit(): void {}

  ngOnSubmit(): void {}
  async submitProduct() {
    const path: string = this.name.replace(/\s/g, '').toLowerCase();
    console.log('hi there', path);
    await this.db
      // .collection('products')
      .doc('/products/' + path)
      .set({
        name: this.name,
        description: this.description,
        uses: [
          this.uses.value.diffuse,
          this.uses.value.ingest,
          this.uses.value.surfaceCleaning,
          this.uses.value.topical,
        ],
        benefits: [
          this.benefits.value.boostMood,
          this.benefits.value.inflammation,
          this.benefits.value.painRelief,
          this.benefits.value.sleep,
          this.benefits.value.stressRelief,
        ],
      })
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.error('Error: ', err);
      });

    alert(
      'You submitted a product:' +
        this.name +
        ', description: ' +
        this.description +
        ', uses: ' +
        this.uses.value.diffuse
    );
    //throw new Error('Method not implemented.');
  }
}
