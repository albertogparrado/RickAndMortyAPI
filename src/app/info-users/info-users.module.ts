import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUsersPageRoutingModule } from './info-users-routing.module';

import { InfoUsersPage } from './info-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUsersPageRoutingModule
  ],
  declarations: [InfoUsersPage]
})
export class InfoUsersPageModule {}
