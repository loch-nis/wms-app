import { NgModule, inject } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faBook,
  faLink,
  faLock,
  faLockOpen,
  faUser,
  faRightFromBracket,
  faHome,
  faInfoCircle,
  faTruck,
  faBarcode,
  faSignInAlt,
  faSignOutAlt,
  faChartSimple,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule], // todo self-quiz: why this?
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
    faLockOpen,
    faSignInAlt,
    faSignOutAlt,
    faChartSimple,
    faTree,
  ];

  constructor() {
    // todo self-quiz: why this?
    this.faIconLibrary.addIcons(...this.icons);
  }
}

// todo what would we do with modern stand-alone angular instead of this?
// why? bundle size, tree shaking
