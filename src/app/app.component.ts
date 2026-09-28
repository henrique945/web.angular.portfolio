import { Component, DOCUMENT, HostListener, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { projects } from './data/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnDestroy {
  public activeModal: 'contact' | 'image' | null = null;
  public imageSources: string[] = [];
  public imageCaptions: string[] = [];
  public activeImageIndex = 0;
  public showScrollTop = false;

  private readonly subscriptions = new Subscription();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.subscriptions.add(this.route.queryParams.subscribe(params => {
      const browserParams = new URLSearchParams(this.document.defaultView?.location.search || '');
      const modal = String(params['modal'] || browserParams.get('modal') || '');
      const projectId = String(params['project'] || browserParams.get('project') || '');
      const imageIndex = Number(params['image'] ?? browserParams.get('image') ?? 0);
      this.activeModal = modal === 'contact' ? 'contact' : this.isImageModal(modal) ? 'image' : null;

      if (this.activeModal === 'image')
        this.configureImageModal(modal, projectId, imageIndex);
      else {
        this.imageSources = [];
        this.imageCaptions = [];
        this.activeImageIndex = 0;
      }
    }));

    this.subscriptions.add(this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.document.defaultView?.requestAnimationFrame(() => this.updateScrollTopVisibility());
    }));
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    this.updateScrollTopVisibility();
  }

  public scrollToTop(): void {
    const view = this.document.defaultView;
    if (!view)
      return;

    const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    view.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  public closeModal(): void {
    void this.router.navigate([], {
      queryParams: { modal: null, project: null, image: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  public selectImage(index: number): void {
    this.activeImageIndex = index;
    const projectId = String(this.route.snapshot.queryParams['project'] || '');
    if (projectId) {
      void this.router.navigate([], {
        queryParams: { image: index },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private updateScrollTopVisibility(): void {
    this.showScrollTop = (this.document.defaultView?.scrollY || 0) > 300;
  }

  private isImageModal(value: string): boolean {
    return value === 'image' || value.startsWith('img|');
  }

  private configureImageModal(modal: string, projectId: string, requestedIndex: number): void {
    const project = projects.find(item => item.id === projectId);
    if (project) {
      this.imageSources = [project.coverImage, ...project.imageUrls];
      this.imageCaptions = this.imageSources.map((_, index) => index === 0
        ? `${project.name} project preview`
        : `${project.name} screenshot ${index}`);
      this.activeImageIndex = Number.isInteger(requestedIndex)
        ? Math.max(0, Math.min(requestedIndex, this.imageSources.length - 1))
        : 0;
      return;
    }

    const legacySource = modal.startsWith('img|') ? modal.slice(4) : '';
    this.imageSources = legacySource ? [legacySource] : [];
    this.imageCaptions = legacySource ? ['Expanded project screenshot'] : [];
    this.activeImageIndex = 0;
  }
}
