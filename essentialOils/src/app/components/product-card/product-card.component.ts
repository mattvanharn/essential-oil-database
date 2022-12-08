import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  dataSource = {};
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productUses = '';
  @Input() productBenefits = '';

  constructor() {}

  ngOnInit(): void {}
}
