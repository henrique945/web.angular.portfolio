//#region Imports

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subscription } from 'rxjs';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly modal: SimpleModalService,
  ) {
    this.paramSubscription = this.route.queryParams.subscribe(param => {
      if (!param || !param['modal'])
        return;

      if (param['modal'] === 'contact')
        this.modal.addModal(ContactModalComponent);
    });
  }

  //#endregion

  //#region Private Properties

  public paramSubscription: Subscription;

  //#endregion

  //#region Public Functions

  public ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }

  //#endregion

}
