//#region Imports

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
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
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    SimpleModalModule.forRoot({ container: document.body }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        autoFocus: true,
      },
    }),
    ContactModalModule,
    ImageZoomModalModule,
  ],
  entryComponents: [
    ContactModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
