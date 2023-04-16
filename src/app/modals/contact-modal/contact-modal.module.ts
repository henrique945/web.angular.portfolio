//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactModalComponent } from './contact-modal.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ContactModalComponent,
  ],
  exports: [
    ContactModalComponent,
  ],
})
export class ContactModalModule {}
