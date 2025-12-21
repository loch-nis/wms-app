import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  imports: [MatSlideToggleModule, MatFormFieldModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
