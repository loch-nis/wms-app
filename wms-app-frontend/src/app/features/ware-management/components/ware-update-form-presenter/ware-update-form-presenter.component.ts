import { Component, input, output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  WareUpdateAction,
  WareUpdateEvent,
} from '../../../../core/models/ware.model';

@Component({
  selector: 'app-update-ware-form',
  imports: [FormsModule],
  templateUrl: './ware-update-form-presenter.component.html',
})
export class WareUpdateFormPresenterComponent {
  barcode = input<string>('');
  action = input<WareUpdateAction>('increaseQuantity');
  save = output<WareUpdateEvent>();

  quantityDelta = 1;

  onSubmit() {
    this.save.emit({
      action: this.action(),
      barcode: this.barcode(),
      quantityDelta: this.quantityDelta,
    });
  }
}
