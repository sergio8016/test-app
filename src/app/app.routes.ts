import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{
		path: 'login',
		loadComponent: () => import('./features/login/login.component').then((module) => module.LoginComponent),
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then((module) => module.DashboardLayoutComponent),
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'buy-items' },
			{
				path: 'buy-items',
				loadComponent: () => import('./features/buy-items/buy-items.component').then((module) => module.BuyItemsComponent),
			},
		],
	},
	{ path: '**', redirectTo: 'login' },
];
