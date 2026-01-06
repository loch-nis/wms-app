import { Component, model, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const moment = _rollupMoment || _moment;

export const FIRST_MONTH_OF_CURRENT_YEAR = moment()
  .startOf('year')
  .format('YYYY-MM');
export const LAST_MONTH_OF_CURRENT_YEAR = moment()
  .endOf('year')
  .format('YYYY-MM');

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-month-range-selector',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './month-range-selector-presenter.component.html',
  providers: [provideMomentDateAdapter(MY_FORMATS)],
})
export class MonthRangeSelectorPresenterComponent {
  startMonth = model<string>(FIRST_MONTH_OF_CURRENT_YEAR);
  endMonth = model<string>(LAST_MONTH_OF_CURRENT_YEAR);

  _startMonth = model<Moment>(moment().startOf('year'));
  _endMonth = model<Moment>(moment().endOf('year'));

  setStartMonth(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>,
  ) {
    const fieldValue = this._startMonth() ?? moment().startOf('year');
    fieldValue.month(normalizedMonthAndYear.month());
    fieldValue.year(normalizedMonthAndYear.year());
    this._startMonth.set(fieldValue);
    this.startMonth.set(fieldValue.format('YYYY-MM'));
    console.log(this.startMonth());
    datepicker.select(fieldValue);
    datepicker.close();
  }

  setEndMonth(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>,
  ) {
    const fieldValue = this._endMonth() ?? moment().startOf('year');
    fieldValue.month(normalizedMonthAndYear.month());
    fieldValue.year(normalizedMonthAndYear.year());
    this._endMonth.set(fieldValue);
    this.endMonth.set(fieldValue.format('YYYY-MM'));
    datepicker.select(fieldValue);
    datepicker.close();
  }
}
