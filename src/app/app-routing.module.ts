import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'userslist',
    pathMatch: 'full'
  },
  {
    path: 'userslist',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'info-users/:id',
    loadChildren: () => import('./info-users/info-users.module').then( m => m.InfoUsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
