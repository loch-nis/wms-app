import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HikeService } from '../../hike.service';
import { HikeListPresenterComponent } from "../../components/hike-list-presenter/hike-list-presenter.component";
import { Hike } from '../../models/hike.model';

@Component({
	selector: 'app-hike-planner',
	imports: [HikeListPresenterComponent],
	templateUrl: './hike-planner-container.component.html',
})
export class HikePlannerContainerComponent {
	private hikeService = inject(HikeService);

	hikeList = computed<Hike[] | []>(() => {
        return this.hikeListResource.hasValue() ? this.hikeListResource.value() : [];
    });

	hikeListResource = rxResource({
		stream: () => this.hikeService.getMyHikes()
	});
}
