//#region Imports

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//#endregion

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'project/:id', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) },
  { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
