//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectItemComponent } from './project-item.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
  ],
  declarations: [
    ProjectItemComponent,
  ],
  exports: [
    ProjectItemComponent,
  ],
})
export class ProjectItemModule {}

