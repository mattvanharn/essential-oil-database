import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface essentialOilsData {
  name: string;
  description: string;
  uses: [];
  benefits: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public productName = '';
  public productDescription = '';
  public productUses = {};
  public productBenefits = {};

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ experimentalForceLongPolling: true });
    db.doc<essentialOilsData>('/products/clarysage')
      .valueChanges()
      .subscribe((result) => {
        if (result) {
          console.log(result.benefits);
          this.productName = result.name;
          this.productDescription = result.description;
          db.doc('/products/clarysage/uses/usesDoc')
            .valueChanges()
            .subscribe((res) => {
              if (res) {
                console.log(res);
              }
            });
        }
      });
  }
}
