import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'catatan',
    loadChildren: () => import('./catatan/catatan.module').then(m => m.CatatanPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'catatan_tambah',
    loadChildren: () => import('./catatan_tambah/catatan_tambah.module').then(m => m.CatatanTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'catatan_edit/:id',
    loadChildren: () => import('./catatan_edit/catatan_edit.module').then(m => m.CatatanEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pass-edit/:id',
    loadChildren: () => import('./pass-edit/pass-edit.module').then(m => m.PassEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canLoad: [AutoLoginGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
