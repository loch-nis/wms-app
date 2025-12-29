import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hike-details-presenter',
  imports: [],
  templateUrl: './hike-details-presenter.component.html',
})
export class HikeDetailsPresenterComponent {
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log(this.activatedRoute);
  }
}
