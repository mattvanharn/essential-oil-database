import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent {
  @Input() displayedProducts: Product[] = [];
  ngOnInit(): void {
  }
}
