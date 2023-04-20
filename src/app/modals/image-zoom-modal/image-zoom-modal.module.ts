//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageZoomModalComponent } from './image-zoom-modal.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ImageZoomModalComponent,
  ],
  exports: [
    ImageZoomModalComponent,
  ],
})
export class ImageZoomModalModule {}
