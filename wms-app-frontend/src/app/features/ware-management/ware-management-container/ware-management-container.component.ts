import { Component, signal, inject, computed } from '@angular/core';
import { WareListPresenterComponent } from '../ware-list-presenter/ware-list-presenter.component';
import { WareLookupPresenterComponent } from '../ware-lookup-presenter/ware-lookup-presenter.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { WareService } from '../ware.service';
import {
  Ware,
  WareLookupStatus,
  WareUpdateEvent,
} from '../../../core/models/ware.model';
import { NotificationService } from '../../../core/services/notification.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-ware-management',
  imports: [WareListPresenterComponent, WareLookupPresenterComponent],
  templateUrl: './ware-management-container.component.html',
  styleUrl: './ware-management-container.component.scss',
})
export class WareManagementContainerComponent {
  barcode = signal<string>('');

  lookedUpWare = computed<Ware | null>(() => {
    return this.lookedUpWareResource.hasValue()
      ? this.lookedUpWareResource.value()
      : null;
  });

  wareLookupStatus = computed<WareLookupStatus>(() => {
    if (this.barcode() === '') return 'notSearched';
    else if (this.lookedUpWare() === null) return 'notFound';
    else return 'found';
  });

  wareList = computed<Ware[] | []>(() => {
    return this.wareListResource.hasValue()
      ? this.wareListResource.value()
      : [];
  });

  private wareService = inject(WareService);
  private notificationService = inject(NotificationService);

  lookedUpWareResource = rxResource({
    params: () => this.barcode(),
    stream: ({ params: barcode }) => this.wareService.getByBarcode(barcode),
    // could add debouncing
  });

  wareListResource = rxResource({
    stream: () =>
      this.wareService.getAll().pipe(
        tap({
          error: () =>
            this.notificationService.showError(
              'Error: failed getting all wares',
            ),
        }),
      ),
  });

  handleWareCreate = (formValue: any) => {
    const createWareRequest = {
      ...formValue,
      price: formValue.inventory.price,
      quantity: formValue.inventory.quantity,
    };

    this.wareService.post(createWareRequest).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
        this.notificationService.showSuccess('New ware successfully created');
      },
      error: () => {
        this.notificationService.showError('Error: failed creating new ware');
      },
    });
  };

  handleWareUpdate = ({ action, barcode, quantityDelta }: WareUpdateEvent) => {
    if (action === 'decreaseQuantity') quantityDelta *= -1;

    this.wareService.patch(barcode, quantityDelta).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
        this.notificationService.showSuccess('Ware successfully updated');
      },
      error: (error) => {
        if (error.status === 422)
          this.notificationService.showError(
            'Error: likely quantity too low to process packing order',
          );
        else this.notificationService.showError('Error: failed updating ware');
      },
    });
  };

  handleWareDelete = (barcode: string) => {
    this.wareService.delete(barcode).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
        this.notificationService.showSuccess('Ware successfully deleted');
      },
      error: () =>
        this.notificationService.showError('Error: failed deleting ware'),
    });
  };
}
