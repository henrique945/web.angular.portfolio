//#region Imports

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ContactModalModule } from './modals/contact-modal/contact-modal.module';
import { ImageZoomModalModule } from './modals/image-zoom-modal/image-zoom-modal.module';

//#endregion

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ContactModalModule,
    ImageZoomModalModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
