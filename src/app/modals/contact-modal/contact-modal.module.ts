//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ContactModalComponent } from './contact-modal.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
  ],
  declarations: [
    ContactModalComponent,
  ],
  exports: [
    ContactModalComponent,
  ],
})
export class ContactModalModule {}
