//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactModalModule } from '../../modals/contact-modal/contact-modal.module';
import { NavbarComponent } from './navbar.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    ContactModalModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule {}

