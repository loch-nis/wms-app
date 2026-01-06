import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hike-list-button-presenter',
  imports: [RouterLink],
  templateUrl: './hike-list-button-presenter.component.html',
})
export class HikeListButtonPresenterComponent {
  label = input<string>('');
  colorClass = input<string>('');
  hikeId = input<string | number>('');
}
