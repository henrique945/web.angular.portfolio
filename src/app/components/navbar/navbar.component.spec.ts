import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  const events = new Subject<NavigationEnd>();
  let router: Router;
  let component: NavbarComponent;

  beforeEach(() => {
    router = {
      events,
      url: '/',
      navigate: jasmine.createSpy('navigate'),
    } as unknown as Router;
    component = new NavbarComponent(document, router);
  });

  afterEach(() => component.ngOnDestroy());

  it('opens and closes the accessible mobile navigation', () => {
    component.toggleMobileNavbar();
    expect(component.isMobileNavbarOpen).toBeTrue();
    expect(document.body.style.overflow).toBe('hidden');

    component.onKeydown(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(component.isMobileNavbarOpen).toBeFalse();
    expect(document.body.style.overflow).toBe('');
  });

  it('opens contact through a shareable query parameter', () => {
    component.openContactModal();
    expect(router.navigate).toHaveBeenCalledWith([], { queryParams: { modal: 'contact' } });
  });
});
