//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectItemModule } from '../../components/project-item/project-item.module';
import { HomeComponent } from './home.component';
import { SocialModule } from '../../components/social/social.module';

//#endregion

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectItemModule,
    SocialModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
