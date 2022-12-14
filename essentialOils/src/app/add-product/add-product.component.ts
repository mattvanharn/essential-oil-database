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

  name: string = '';
  description: string = '';

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

  constructor(
    private _formBuilder: FormBuilder,
    private db: AngularFirestore,
    private productService: ProductService
  ) { }

  ngOnInit(): void { }

  submitProduct(): void {
    this.productService.submitProduct(this.name, this.description, this.uses, this.benefits);
  }
}
