//#region Imports

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalComponent } from 'ngx-simple-modal';

//#endregion

export type ImageContent = { src: string };

@Component({
  selector: 'app-image-zoom-modal',
  templateUrl: './image-zoom-modal.component.html',
  styleUrls: ['./image-zoom-modal.component.scss'],
})
export class ImageZoomModalComponent extends SimpleModalComponent<ImageContent, void> {

  //#region Constructor

  constructor(
    private readonly router: Router,
  ) {
    super();
  }

  //#endregion

  //#region Public Properties

  @Input()
  public src!: string;

  //#endregion

  //#region Public Functions

  public async closeModal(): Promise<void> {
    await this.router.navigate([], { queryParams: {} });
    await this.close();
  }

  //#endregion

}
