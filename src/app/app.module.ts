//#region Imports

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';

//#endregion

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SimpleModalModule.forRoot({ container: document.body }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        autoFocus: true,
      },
    }),
  ],
  entryComponents: [
    ContactModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
