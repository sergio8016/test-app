import { Routes } from '@angular/router';
import { adminGuard, authenticatedGuard, workerGuard } from './core/auth/auth.guards';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{
		path: 'login',
		loadComponent: () => import('./features/login/login.component').then((module) => module.LoginComponent),
	},
	{
		path: 'dashboard',
		canActivate: [authenticatedGuard],
		loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then((module) => module.DashboardLayoutComponent),
		children: [
			{
				path: '',
				pathMatch: 'full',
				loadComponent: () => import('./features/dashboard-home/dashboard-home.component').then((module) => module.DashboardHomeComponent),
			},
			{
				path: 'buy-items',
				canActivate: [adminGuard],
				loadComponent: () => import('./features/buy-items/buy-items.component').then((module) => module.BuyItemsComponent),
			},
			{
				path: 'assign-task',
				canActivate: [adminGuard],
				loadComponent: () => import('./features/assign-task/assign-task.component').then((module) => module.AssignTaskComponent),
			},
			{
				path: 'tasks',
				canActivate: [workerGuard],
				loadComponent: () => import('./features/tasks/tasks.component').then((module) => module.TasksComponent),
			},
		],
	},
	{ path: '**', redirectTo: 'login' },
];
