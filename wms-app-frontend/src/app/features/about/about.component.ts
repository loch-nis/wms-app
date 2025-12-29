import { Component, inject } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-about',
  imports: [HighlightDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
