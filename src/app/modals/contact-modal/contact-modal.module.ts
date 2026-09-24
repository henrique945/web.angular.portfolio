//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactModalComponent } from './contact-modal.component';
import { SocialModule } from '../../components/social/social.module';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    SocialModule,
  ],
  declarations: [
    ContactModalComponent,
  ],
  exports: [
    ContactModalComponent,
  ],
})
export class ContactModalModule {
}
