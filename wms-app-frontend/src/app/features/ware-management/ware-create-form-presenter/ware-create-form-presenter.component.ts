import { Component, effect, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NewWare } from '../../../core/models/ware.model';

@Component({
  selector: 'app-create-ware-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './ware-create-form-presenter.component.html',
})
export class WareCreateFormPresenterComponent {
  barcode = input<string>('');
  save = output<NewWare>();
  synchronizeBarcodeField = effect(() => {
    this.newWare.barcode = this.barcode();
  });

  newWare: NewWare = {
    barcode: '',
    name: '',
    inventory: {
      price: 0,
      quantity: 0,
    },
    placement_id: 1,
  };

  readonly placementOptions = [1, 2, 3, 4, 5];

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.save.emit(this.newWare);
  }
}
