//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  //#region Constructor

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
  ) {}

  //#endregion

  //#region Public Functions

  // TODO: verify mobile screen

  public ngOnInit(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  //#endregion

}
