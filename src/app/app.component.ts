//#region Imports

import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
  ) {
  }

  public ngAfterViewInit() {
    this.document.getElementById('app')!.scrollTop = 0;
  }

  // TODO: verify mobile screen
  // TODO: change language to English
}
