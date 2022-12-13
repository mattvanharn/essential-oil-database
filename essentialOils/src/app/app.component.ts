import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

import { PRODUCTS } from './mock-products';
import { ProductService } from './product.service';
import { Product } from './product';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  displayedProducts: Product[] = [];

  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  checked6: boolean = false;
  checked7: boolean = false;
  checked8: boolean = false;
  checked9: boolean = false;

  constructor(
    private dialogRef: MatDialog,
    public productService: ProductService,
    private _formBuilder: FormBuilder,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    //this.db.firestore.settings({ experimentalForceLongPolling: true });
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
        //console.log(this.products[0].uses);
      });
    this.displayedProducts = this.products;
  }

  filterProductsByUse(index: number) {
    return this.products.filter((product) => product.uses[index] === true);
    throw new Error('Method not implemented.');
  }

  filterProductsByBenefit(index: number) {
    return this.products.filter((product) => product.benefits[index] === true);
    throw new Error('Method not implemented.');
  }

  addProduct() {
    alert('You pressed the button');
    throw new Error('Method not implemented.');
  }

  title = 'essentialOils';

  openAddDialog() {
    this.dialogRef.open(AddProductComponent);
  }

  onChecked1() {
    this.checked1 = !this.checked1;
    this.checked1
      ? (this.displayedProducts = this.filterProductsByUse(0))
      : (this.displayedProducts = this.products);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked2() {
    this.checked2 = !this.checked2;
    this.checked2
      ? (this.displayedProducts = this.filterProductsByUse(1))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked3() {
    this.checked3 = !this.checked3;
    this.checked3
      ? (this.displayedProducts = this.filterProductsByUse(2))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked4() {
    this.checked4 = !this.checked4;
    this.checked4
      ? (this.displayedProducts = this.filterProductsByUse(3))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked5() {
    this.checked5 = !this.checked5;
    this.checked5
      ? (this.displayedProducts = this.filterProductsByBenefit(0))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked6() {
    this.checked6 = !this.checked6;
    this.checked6
      ? (this.displayedProducts = this.filterProductsByBenefit(1))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked7() {
    this.checked7 = !this.checked7;
    this.checked7
      ? (this.displayedProducts = this.filterProductsByBenefit(2))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked8() {
    this.checked8 = !this.checked8;
    this.checked8
      ? (this.displayedProducts = this.filterProductsByBenefit(3))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked9() {
    this.checked9 = !this.checked9;
    this.checked9
      ? (this.displayedProducts = this.filterProductsByBenefit(4))
      : (this.displayedProducts = this.products);
    console.table(this.displayedProducts);
    return false;
    throw new Error('Method not implemented.');
  }

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
}
