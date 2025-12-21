import { Component, effect, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

interface WareFormModel {
  barcode: string;
  name: string;
  price: number | null;
  placement_id: number | null;
  quantity: number;
}

@Component({
  selector: 'app-create-ware-form',
  imports: [ReactiveFormsModule],
  templateUrl: './ware-create-form-presenter.component.html',
})
export class WareCreateFormPresenterComponent {
  barcode = input<string>('');
  submitFunction = input<(formValue: any) => void>(() => {});
  syncBarcodeField = effect(() => {
    this.form.patchValue({
      barcode: this.barcode(),
    });
  });

  readonly placementOptions = [1, 2, 3, 4, 5];

  form: FormGroup = new FormGroup({
    barcode: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    placement_id: new FormControl(1, Validators.required),
    quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.submitFunction()(this.form.value);
  }
}
