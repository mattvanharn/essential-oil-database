import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

import { ProductService } from './product.service';
import { Product } from './product';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  checked6: boolean = false;
  checked7: boolean = false;
  checked8: boolean = false;
  checked9: boolean = false;
  checked10: boolean = false;
  checked11: boolean = false;
  checked12: boolean = false;
  checked13: boolean = false;
  checked14: boolean = false;
  checked15: boolean = false;
  checked16: boolean = false;
  checked17: boolean = false;
  checked18: boolean = false;


  products$!: Observable<Product[]>;
  displayedProducts$!: Observable<Product[]>;

  search: string = '';

  constructor(
    private dialogRef: MatDialog,
    public productService: ProductService,
    private _formBuilder: FormBuilder,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProducts$();
  }

  getProducts$() {
    this.productService.getProducts$();
    // this.productService.getProducts$().subscribe(products$ => this.products$ = products$);
    this.displayedProducts$ = this.products$;
    throw new Error('Method not implemented.');
  }

  filterProducts$ByUse(index: number) {
    return this.products$.pipe(map(products$ => products$.filter(product$ => product$.uses[index] === true)));
    throw new Error('Method not implemented.');
  }

  // filterProducts$ByBenefit(index: number) {
  //   return (this.products$).filter((product$: { benefits: boolean[]; }) => product$.benefits[index] === true);
  //   throw new Error('Method not implemented.');
  // }

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
    this.checked1 ? this.displayedProducts$ = this.filterProducts$ByUse(0) : this.displayedProducts$ = this.products$;
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked2() {
    this.checked2 = !this.checked2;
    // this.checked2 ? this.displayedProducts$ = this.filterProducts$ByUse(1) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked3() {
    this.checked3 = !this.checked3;
    // this.checked3 ? this.displayedProducts$ = this.filterProducts$ByUse(2) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked4() {
    this.checked4 = !this.checked4;
    // this.checked4 ? this.displayedProducts$ = this.filterProducts$ByUse(3) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked5() {
    this.checked5 = !this.checked5;
    // this.checked5 ? this.displayedProducts$ = this.filterProducts$ByBenefit(0) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked6() {
    this.checked6 = !this.checked6;
    // this.checked6 ? this.displayedProducts$ = this.filterProducts$ByBenefit(1) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked7() {
    this.checked7 = !this.checked7;
    // this.checked7 ? this.displayedProducts$ = this.filterProducts$ByBenefit(2) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked8() {
    this.checked8 = !this.checked8;
    // this.checked8 ? this.displayedProducts$ = this.filterProducts$ByBenefit(3) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked9() {
    this.checked9 = !this.checked9;
    // this.checked9 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }
  onChecked10() {
    this.checked10 = !this.checked10;
    // this.checked10 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked11() {
    this.checked11 = !this.checked11;
    // this.checked11 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked12() {
    this.checked12 = !this.checked12;
    // this.checked12 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked13() {
    this.checked13 = !this.checked13;
    // this.checked13 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked14() {
    this.checked14 = !this.checked14;
    // this.checked14 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked15() {
    this.checked15 = !this.checked15;
    // this.checked15 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked16() {
    this.checked16 = !this.checked16;
    // this.checked16 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked17() {
    this.checked17 = !this.checked17;
    // this.checked17 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  onChecked18() {
    this.checked18 = !this.checked18;
    // this.checked18 ? this.displayedProducts$ = this.filterProducts$ByBenefit(4) : this.displayedProducts$ = this.products$;
    console.table(this.displayedProducts$);
    return false;
    throw new Error('Method not implemented.');
  }

  uses = this._formBuilder.group({
    diffuser: false,
    ingestion: false,
    inhilation: false,
    dryEvaporation: false,
    skin: false,
    bathAndShower: false,
    humidifier: false,
    surfaceCleaning: false
  });

  benefits = this._formBuilder.group({
    relaxation: false,
    digestion: false,
    calming: false,
    stressRelief: false,
    painRelief: false,
    sleepAid: false,
    moodImprovement: false,
    energyBoost: false,
    skinAndHairHealth: false,
    hormoneBalance: false
  });
}
