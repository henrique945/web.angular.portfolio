//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModalModule } from '../../modals/contact-modal/contact-modal.module';
import { ProjectComponent } from './project.component';

//#endregion

const routes: Routes = [{ path: '', component: ProjectComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContactModalModule,
  ],
  declarations: [
    ProjectComponent,
  ],
  exports: [
    ProjectComponent,
  ],
})
export class ProjectModule {}
