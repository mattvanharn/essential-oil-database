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
  ) { }

  editUses = this._formBuilder.group({
    diffuser: this.data.uses[0],
    ingestion: this.data.uses[1],
    inhilation: this.data.uses[2],
    dryEvaporation: this.data.uses[3],
    skin: this.data.uses[4],
    bathAndShower: this.data.uses[5],
    humidifier: this.data.uses[6],
    surfaceCleaning: this.data.uses[7]
  });

  editBenefits = this._formBuilder.group({
    relaxation: this.data.benefits[0],
    digestion: this.data.benefits[1],
    calming: this.data.benefits[2],
    stressRelief: this.data.benefits[3],
    painRelief: this.data.benefits[4],
    sleepAid: this.data.benefits[5],
    moodImprovement: this.data.benefits[6],
    energyBoost: this.data.benefits[7],
    skinAndHairHealth: this.data.benefits[8],
    hormoneBalance: this.data.benefits[9]
  });

  editProduct() {
    const path: string = this.data.name.replace(/\s/g, '').toLowerCase();
    console.log('hi there', path);
    this.db
      .doc('/products/' + path)
      .set({
        name: this.data.name,
        description: this.data.description,
        uses: [
          this.editUses.value.diffuser,
          this.editUses.value.ingestion,
          this.editUses.value.inhilation,
          this.editUses.value.dryEvaporation,
          this.editUses.value.skin,
          this.editUses.value.bathAndShower,
          this.editUses.value.humidifier,
          this.editUses.value.surfaceCleaning,
        ],
        benefits: [
          this.editBenefits.value.relaxation,
          this.editBenefits.value.digestion,
          this.editBenefits.value.calming,
          this.editBenefits.value.stressRelief,
          this.editBenefits.value.painRelief,
          this.editBenefits.value.sleepAid,
          this.editBenefits.value.moodImprovement,
          this.editBenefits.value.energyBoost,
          this.editBenefits.value.skinAndHairHealth,
          this.editBenefits.value.hormoneBalance,
        ],
      })
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }
  deleteProduct(product: any): void {
    this.db
      .doc('/products/' + product.replace(/\s/g, '').toLowerCase())
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((err) => {
        console.error('Error removing doc: ', err);
      });
  }
}
