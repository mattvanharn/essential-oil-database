import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    boostMood: true,
    inflammation: false,
    painRelief: true,
    sleep: true,
    stressRelief: false,
  });

  ngOnInit(): void {}

  ngOnSubmit(): void {}
  submitProduct() {
    const path = this.name.replace(/\s/g, '').toLowerCase();
    console.log(path);
    this.db
      .collection('products')
      .doc(path)
      .set({ name: this.name, description: this.description });

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
