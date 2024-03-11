//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialComponent } from './social.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
  ],
  declarations: [
    SocialComponent,
  ],
  exports: [
    SocialComponent,
  ],
})
export class SocialModule {
}

