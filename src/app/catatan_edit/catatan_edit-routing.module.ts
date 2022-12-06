
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatatanEditPage } from './catatan_edit.page';

const routes: Routes = [
  {
    path: '',
    component: CatatanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatatanEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 13:36:56 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */