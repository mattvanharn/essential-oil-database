import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
