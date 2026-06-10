import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Troqueles } from './pages/troqueles/troqueles';
import { Usuarios } from './pages/usuarios/usuarios';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'troqueles', component: Troqueles },
  { path: 'usuarios', component: Usuarios },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
