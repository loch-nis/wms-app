import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ware-delete-button',
  imports: [FormsModule],
  templateUrl: './ware-delete-button-presenter.component.html',
})
export class WareDeleteButtonPresenterComponent {
  barcode = input<string>('');
  delete = output<string>();

  onSubmit() {
    this.delete.emit(this.barcode());
  }
}
