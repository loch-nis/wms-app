import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPresenterComponent } from './shared/ui/header/header-presenter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPresenterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
