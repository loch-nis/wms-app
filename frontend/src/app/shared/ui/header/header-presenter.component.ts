import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconModule } from '../icon';

interface MenuItem {
  link: string;
  label: string;
  icon: IconProp;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    RouterLinkActive, 
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    IconModule
  ],
  templateUrl: './header-presenter.component.html',
  styleUrl: './header-presenter.component.scss'
})
export class HeaderPresenterComponent {
  
/* 
  todo login and auth
   authUser: AuthUser | null | undefined = null;

  todo logout
  */

  readonly menuItems: MenuItem[] = [
    { link: '/', label: 'Home', icon: 'home' },
    { link: '/about', label: 'About', icon: 'info-circle' },
    { link: '/ware-management', label: 'Ware Management', icon: 'truck' },
  ]; 
}
