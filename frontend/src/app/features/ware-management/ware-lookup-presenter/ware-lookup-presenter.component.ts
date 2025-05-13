import { Component, input, model } from '@angular/core';
import { Ware, WareLookupStatus, WareUpdateAction } from '../../../core/models/ware.model';
import { BarcodeFormPresenterComponent } from '../barcode-form-presenter/barcode-form-presenter.component';
import { WareCreateFormPresenterComponent } from '../ware-form-presenter/ware-create-form-presenter.component';
import { WareItemPresenterComponent } from '../ware-item-presenter/ware-item-presenter.component';
import { WareUpdateFormPresenterComponent } from '../components/ware-update-form-presenter/ware-update-form-presenter.component';

@Component({
  selector: 'app-ware-lookup',
  imports: [BarcodeFormPresenterComponent, WareCreateFormPresenterComponent,
     WareItemPresenterComponent, WareUpdateFormPresenterComponent],
  templateUrl: './ware-lookup-presenter.component.html',
  styleUrl: './ware-lookup-presenter.component.scss'
})
export class WareLookupPresenterComponent {
  barcode = model<string>("");
  lookedUpWare = input<Ware | null>(null);
  wareLookupStatus = input<WareLookupStatus>("notSearched");
  submitWareCreateFunction = input<(formValue : any) => void>(() => {});
  submitWareUpdateFunction = input<(action: WareUpdateAction, barcode: string, quantityDelta: number) => void>(() => {});
}
