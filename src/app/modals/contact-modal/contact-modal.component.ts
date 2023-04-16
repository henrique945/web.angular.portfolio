//#region Imports

import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

//#endregion

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent extends  SimpleModalComponent<void, void> {

  //#region Constructor

  constructor() {
    super();
  }

  //#endregion

  //#region Public Functions

  public async closeModal(): Promise<void> {
    await this.close();
  }

  //#endregion

}
