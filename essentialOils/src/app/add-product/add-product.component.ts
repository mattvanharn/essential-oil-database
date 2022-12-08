import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


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

  submitProduct() {
    alert("You submitted a product");
    throw new Error('Method not implemented.');
  }

  ngOnSubmit(): void {

  }
}
