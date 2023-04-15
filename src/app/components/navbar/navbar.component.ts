//#region Imports

import { Component } from '@angular/core';

//#endregion

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  //#region Public Properties

  public isMobileNavbarOpen: boolean = false;

  //#endregion

  //#region Public Functions

  public toggleMobileNavbar(): void {
    this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
  }

  //#endregion

}
