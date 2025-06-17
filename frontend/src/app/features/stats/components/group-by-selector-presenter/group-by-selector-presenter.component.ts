import { Component, model } from '@angular/core';
import { allWareAttributes, attributeLabels, Ware, wareAttributes } from '../../../../core/models/ware.model';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-group-by-selector',
	imports: [FormsModule],
	templateUrl: './group-by-selector-presenter.component.html',
})
export class GroupBySelectorPresenterComponent {
	groupBy = model<keyof Ware | undefined>(undefined);

	readonly wareAttributes = wareAttributes;
	readonly attributeLabels = attributeLabels;
}
