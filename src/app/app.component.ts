//#region Imports

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { Observable, Subscription } from 'rxjs';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { ImageZoomModalComponent } from './modals/image-zoom-modal/image-zoom-modal.component';

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
    private readonly router: Router,
    private readonly modal: SimpleModalService,
  ) {
    this.paramSubscription = this.route.queryParams.subscribe(param => {
      if (!param || !param['modal'])
        return;

      const query: string = param['modal'];
      if (query === 'contact')
        this.modalObservable = this.modal.addModal(ContactModalComponent);
      else if (query.includes('img'))
        this.modalObservable = this.modal.addModal(ImageZoomModalComponent, {
          src: query.split('|')[1],
        });

      this.modalSubscription = this.modalObservable.subscribe(_ => {
        this.router.navigate([], { queryParams: {} });
      });
    });
  }

  //#endregion

  //#region Private Properties

  public paramSubscription: Subscription;

  public modalObservable: Observable<any> = new Observable<any>();

  public modalSubscription!: Subscription;

  //#endregion

  //#region Public Functions

  public ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.modalSubscription?.unsubscribe();
  }

  //#endregion

}
