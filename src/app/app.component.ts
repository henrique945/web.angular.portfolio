import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnDestroy {
  public activeModal: 'contact' | 'image' | null = null;
  public imageSrc: string = '';
  private readonly paramSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.paramSubscription = this.route.queryParams.subscribe(param => {
      const query = String(param['modal'] || '');
      this.activeModal = query === 'contact' ? 'contact' : query.startsWith('img|') ? 'image' : null;
      this.imageSrc = this.activeModal === 'image' ? query.slice(4) : '';
    });
  }

  public closeModal(): void {
    void this.router.navigate([], { queryParams: {}, replaceUrl: true });
  }

  public ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
