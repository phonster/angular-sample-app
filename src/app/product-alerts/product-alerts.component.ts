import { Component, Input, Output, EventEmitter } from '@angular/core';

// Here we import the interface Product, which describes products properties
// but does not re-import the product data. The parent already has that info
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
}
