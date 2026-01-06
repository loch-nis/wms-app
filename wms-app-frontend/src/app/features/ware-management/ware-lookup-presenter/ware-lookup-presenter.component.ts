import { Component, input, model, output } from '@angular/core';
import {
  NewWare,
  Ware,
  WareLookupStatus,
  WareUpdateEvent,
} from '../../../core/models/ware.model';
import { BarcodeFormPresenterComponent } from '../barcode-form-presenter/barcode-form-presenter.component';
import { WareCreateFormPresenterComponent } from '../ware-create-form-presenter/ware-create-form-presenter.component';
import { WareItemPresenterComponent } from '../ware-item-presenter/ware-item-presenter.component';
import { WareUpdateFormPresenterComponent } from '../components/ware-update-form-presenter/ware-update-form-presenter.component';
import { IconModule } from '../../../shared/ui/icon';

@Component({
  selector: 'app-ware-lookup',
  imports: [
    BarcodeFormPresenterComponent,
    WareCreateFormPresenterComponent,
    WareItemPresenterComponent,
    WareUpdateFormPresenterComponent,
    IconModule,
  ],
  templateUrl: './ware-lookup-presenter.component.html',
})
export class WareLookupPresenterComponent {
  barcode = model<string>('');
  lookedUpWare = input<Ware | null>(null);
  wareLookupStatus = input<WareLookupStatus>('notSearched');
  update = output<WareUpdateEvent>();
  create = output<NewWare>();
}
