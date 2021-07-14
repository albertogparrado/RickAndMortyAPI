import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUsersPage } from './info-users.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUsersPageRoutingModule {}
