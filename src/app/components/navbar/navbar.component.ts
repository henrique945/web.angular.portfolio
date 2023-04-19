//#region Imports

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { ContactModalComponent } from '../../modals/contact-modal/contact-modal.component';

//#endregion

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
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
    this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  //#endregion

}
