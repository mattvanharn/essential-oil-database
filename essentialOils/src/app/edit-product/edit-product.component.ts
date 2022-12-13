import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private db: AngularFirestore,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      description: string;
      uses: boolean[];
      benefits: boolean[];
    }
  ) {}

  uses = this._formBuilder.group({
    diffuse: this.data.uses[0],
    ingest: this.data.uses[1],
    surfaceCleaning: this.data.uses[2],
    topical: this.data.uses[3],
  });

  benefits = this._formBuilder.group({
    boostMood: this.data.benefits[0],
    inflammation: this.data.benefits[1],
    painRelief: this.data.benefits[2],
    sleep: this.data.benefits[3],
    stressRelief: this.data.benefits[4],
  });

  async editProduct() {
    const path: string = this.data.name.replace(/\s/g, '').toLowerCase();
    console.log('hi there', path);
    await this.db
      // .collection('products')
      .doc('/products/' + path)
      .set({
        name: this.data.name,
        description: this.data.description,
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
    //throw new Error('Method not implemented.');
  }
}
