import { Component, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconModule } from '../icon';
import { AuthService } from '../../../features/auth/auth.service';

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
  private readonly authService = inject(AuthService); //not sure if this is bad practice?

  readonly authUser = this.authService.authUser;

  readonly menuItems: MenuItem[] = [
    { link: '/', label: 'Home', icon: 'home' },
    { link: '/about', label: 'About', icon: 'info-circle' },
    { link: '/ware-management', label: 'Ware Management', icon: 'truck' },
    { link: '/stats', label: 'Statistics', icon: 'chart-simple' },
    { link: '/hike-planner', label: 'Hike Planner', icon: 'tree' },
  ]; 
}
