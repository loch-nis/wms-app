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
  synchronizeBarcodeField = effect(() => {
    this.newWare.barcode = this.barcode(); // todo self-quiz: why is this possible?
  });

  save = output<NewWare>();

  // todo self-quiz: why is this necessary? Hint: mutable object, binding
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

// todo - it would still work without the ngModelGroup BUT it enables two things:
/* 
What ngModelGroup actually does for you:

    Logical Grouping in form.value:

        With ngModelGroup: The NgForm.value (the form's internal state) will automatically structure itself as { inventory: { price: 10, quantity: 5 } }.

        Without it: If you just used name="price", the form might try to flatten it or get confused about where price belongs in its own internal map of controls, even if your local model object is nested.

    Group Validation Status (valid, touched, dirty):

        This is the big one. ngModelGroup allows you to check the status of just that section.

        Example: You can show an error message for the whole inventory section:
        HTML

<div ngModelGroup="inventory" #invGroup="ngModelGroup">
   </div>
<div *ngIf="invGroup.invalid">Please fix inventory errors</div>

Without it: You have no way to say "Is the inventory section valid?". You would have to check price.invalid || quantity.invalid manually.
*/
