import { NgModule, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faBook,
  faLink,
  faLock,
  faUser,
  faRightFromBracket,
  faHome,
  faInfoCircle,
  faTruck,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  private readonly faIconLibrary = inject(FaIconLibrary);

  private icons = [
    faStar,
    faBook,
    faLink,
    faLock,
    faUser,
    faRightFromBracket,
    faHome,
    faInfoCircle,
    faTruck,
    faBarcode,
  ];

  constructor() {
    this.faIconLibrary.addIcons(...this.icons);
  }
}
