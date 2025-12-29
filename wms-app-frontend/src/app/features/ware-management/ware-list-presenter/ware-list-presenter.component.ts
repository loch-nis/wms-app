import {
  AfterViewInit,
  Component,
  ViewChild,
  effect,
  input,
  output,
} from '@angular/core';
import { Ware, WareUpdateEvent } from '../../../core/models/ware.model';

import { WareUpdateFormPresenterComponent } from '../components/ware-update-form-presenter/ware-update-form-presenter.component';
import { WareDeleteButtonPresenterComponent } from '../ware-delete-button-presenter/ware-delete-button-presenter.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-ware-list',
  imports: [
    WareUpdateFormPresenterComponent,
    WareDeleteButtonPresenterComponent,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './ware-list-presenter.component.html',
})
export class WareListPresenterComponent implements AfterViewInit {
  wareList = input<Ware[]>([]);
  displayedColumns: string[] = [
    'name',
    'barcode',
    'price',
    'quantity',
    'number-of-wares-to-pack',
    'delete',
  ];
  dataSource = new MatTableDataSource<Ware>(this.wareList());

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    effect(() => {
      this.dataSource.data = this.wareList();
    });
  }

  update = output<WareUpdateEvent>();
  delete = output<string>();
}
