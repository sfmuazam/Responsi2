import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatatanTambahPageRoutingModule } from './catatan_tambah-routing.module';

import { CatatanTambahPage } from './catatan_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatatanTambahPageRoutingModule
  ],
  declarations: [CatatanTambahPage]
})
export class CatatanTambahPageModule {}
