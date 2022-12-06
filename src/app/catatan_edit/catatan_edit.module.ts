import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatatanEditPageRoutingModule } from './catatan_edit-routing.module';

import { CatatanEditPage } from './catatan_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatatanEditPageRoutingModule
  ],
  declarations: [CatatanEditPage]
})
export class CatatanEditPageModule {}
