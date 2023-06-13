import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ThemePickerService } from './services/theme-picker/theme-picker.service';

export const appRoutes: Routes = [
  { 
    path: '',
    resolve: { 
      theme: () => inject(ThemePickerService).init()
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'viewer',
        loadComponent: () => import('./pages/viewer/viewer.component').then(m => m.ViewerComponent),
      }
    ]
  }
];
