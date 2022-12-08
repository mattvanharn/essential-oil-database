import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  submitProduct() {
    alert("You submitted a product");
    throw new Error('Method not implemented.');
  }
  name: string = "";

  uses = this._formBuilder.group({
    diffuse: true,
    topical: false,
    ingest: true,
    surfaceCleaning: false,
  })

  benefits = this._formBuilder.group({
    boostMood: true,
    stressRelief: false,
    sleep: true,
    inflammation: false,
    painRelief: true,
  })
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnSubmit(): void {

  }
}
