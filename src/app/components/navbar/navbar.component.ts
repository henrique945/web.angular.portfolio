//#region Imports

import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#endregion

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

  //#region Constructor

  constructor(
    private readonly router: Router,
  ) {}

  //#endregion

  //#region Public Properties

  public isMobileNavbarOpen: boolean = false;

  //#endregion

  //#region Public Functions

  public toggleMobileNavbar(): void {
    this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  //#endregion

}
