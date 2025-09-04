import { Component, input } from '@angular/core';
import { Hike } from '../../models/hike.model';
import { HikeListButtonPresenterComponent } from "../hike-list-button-presenter/hike-list-button-presenter.component";

@Component({
	selector: 'app-hike-list-presenter',
	imports: [HikeListButtonPresenterComponent],
	templateUrl: './hike-list-presenter.component.html',
})
export class HikeListPresenterComponent {
	hikeList = input<Hike[]>([]);
}
