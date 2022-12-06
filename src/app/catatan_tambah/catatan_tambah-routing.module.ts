
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatatanTambahPage } from './catatan_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: CatatanTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatatanTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 13:36:56 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */