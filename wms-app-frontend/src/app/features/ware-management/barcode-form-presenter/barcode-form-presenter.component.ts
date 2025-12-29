import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barcode-form',
  imports: [FormsModule],
  template: `
    <input
      type="text"
      id="barcode"
      autofocus
      autocomplete="off"
      placeholder="Enter barcode"
      [(ngModel)]="barcode"
      class="flex w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-center placeholder-gray-400 shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  `,
})
export class BarcodeFormPresenterComponent {
  barcode = model<string>('');
}

// todo self-quiz: why is it a model here and a signal in the parent? :D

// todo slet: analogy (child component perspektiv):
// signal() → private field with setter + getter
// model() → public setter + getter
// input() → public getter
