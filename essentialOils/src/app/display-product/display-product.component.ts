import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss'],
})

export class DisplayProductComponent implements OnInit {

  products$!: Observable<Product[]>;
  displayedProducts!: Observable<Product[]>;

  constructor(private productService: ProductService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getProducts$();
  }

  getProducts$() {
    this.products$ = this.productService.getProducts$();
    this.displayedProducts = this.products$;
    throw new Error('Method not implemented.');
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product);
    }
    
  openEditDialog(product: Product) {
    this.dialogRef.open(EditProductComponent, {
      data: {
        name: product.name,
        description: product.description,
        uses: product.uses,
        benefits: product.benefits,
      },
    });
  }

  openEditDialog(product: Product) {
    this.dialogRef.open(EditProductComponent, {
      data: {
        name: product.name,
        description: product.description,
        uses: product.uses,
        benefits: product.benefits,
      },
    });
  }
}
