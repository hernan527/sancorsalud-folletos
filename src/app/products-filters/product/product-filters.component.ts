import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductPlant } from '../state';

@Component({
  selector: 'app-product-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./product-filters.component.html`,
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent {
  @Input()
  products: ProductPlant[];
  product: any;
  @Output()
  add = new EventEmitter<ProductPlant>();
  @Output()
  subtract = new EventEmitter<ProductPlant>();
}
