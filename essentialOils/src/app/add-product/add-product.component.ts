import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
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
    private db: AngularFirestore,
    private productService: ProductService
  ) { }

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

  ngOnInit(): void { }

  onSubmit(): void {
    console.log("test");
    this.productService.submitProduct(this.name, this.description, this.uses, this.benefits);
  }
}
