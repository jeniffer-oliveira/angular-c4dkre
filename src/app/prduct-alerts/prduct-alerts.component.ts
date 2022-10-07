import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-prduct-alerts',
  templateUrl: './prduct-alerts.component.html',
  styleUrls: ['./prduct-alerts.component.css'],
})
export class PrductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
