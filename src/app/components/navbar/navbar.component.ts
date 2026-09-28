import { Component, DOCUMENT, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('drawer') private drawer?: ElementRef<HTMLElement>;

  public isMobileNavbarOpen = false;
  public isScrolled = false;
  public activeSection: 'top' | 'exp' | 'projects' | 'contact' = 'top';

  private lastFocusedElement: HTMLElement | null = null;
  private readonly routerSubscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
  ) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileNavbar(false);
        this.updateActiveSection();
      });
  }

  public toggleMobileNavbar(): void {
    this.isMobileNavbarOpen ? this.closeMobileNavbar() : this.openMobileNavbar();
  }

  public closeMobileNavbar(restoreFocus = true): void {
    if (!this.isMobileNavbarOpen)
      return;

    this.isMobileNavbarOpen = false;
    this.document.body.style.overflow = '';
    if (restoreFocus)
      this.lastFocusedElement?.focus();
  }

  public openContactModal(): void {
    this.closeMobileNavbar(false);
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    const view = this.document.defaultView;
    this.isScrolled = (view?.scrollY || 0) > 8;
    this.updateActiveSection();
  }

  @HostListener('document:keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    if (!this.isMobileNavbarOpen)
      return;

    if (event.key === 'Escape') {
      this.closeMobileNavbar();
      return;
    }

    if (event.key !== 'Tab' || !this.drawer)
      return;

    const focusable = Array.from(this.drawer.nativeElement.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    if (!focusable.length)
      return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  public ngOnDestroy(): void {
    this.document.body.style.overflow = '';
    this.routerSubscription.unsubscribe();
  }

  private openMobileNavbar(): void {
    this.lastFocusedElement = this.document.activeElement as HTMLElement | null;
    this.isMobileNavbarOpen = true;
    this.document.body.style.overflow = 'hidden';
    this.document.defaultView?.requestAnimationFrame(() =>
      this.drawer?.nativeElement.querySelector<HTMLElement>('button, a')?.focus());
  }

  private updateActiveSection(): void {
    if (!this.router.url.startsWith('/?') && this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.activeSection = 'projects';
      return;
    }

    const sections = ['top', 'exp', 'projects', 'contact'] as const;
    const marker = (this.document.defaultView?.scrollY || 0) + 140;
    let active: typeof sections[number] = 'top';
    for (const id of sections) {
      const element = this.document.getElementById(id);
      if (element && element.offsetTop <= marker)
        active = id;
    }
    this.activeSection = active;
  }
}
