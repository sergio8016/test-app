import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AvatarModule, ButtonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  protected readonly auth = inject(AuthService);
  protected readonly modules = this.auth.role === 'admin'
    ? [
      { label: 'Buy Items', icon: 'pi pi-shopping-cart', route: '/dashboard/buy-items' },
      { label: 'Assign Task', icon: 'pi pi-send', route: '/dashboard/assign-task' },
    ]
    : [{ label: 'Tasks', icon: 'pi pi-list-check', route: '/dashboard/tasks' }];
}
