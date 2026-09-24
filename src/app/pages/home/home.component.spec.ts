import { Router } from '@angular/router';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { SeoService } from '../../seo.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let router: jasmine.SpyObj<Router>;
  let seo: jasmine.SpyObj<SeoService>;

  beforeEach(() => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    seo = jasmine.createSpyObj<SeoService>('SeoService', ['setHomeMetadata']);
    component = new HomeComponent(document, router, seo);
  });

  it('keeps the three strategic projects featured', () => {
    expect(component.featuredProjects.map(project => project.id)).toEqual(['icanotes', 'eclub', 'bolao-uol']);
  });

  it('filters only the secondary project archive', () => {
    component.filterProjectByTag(ProjectTagsEnum.APIS);

    expect(component.listProjectsAux.length).toBeGreaterThan(0);
    expect(component.listProjectsAux.every(project => project.tags.includes(ProjectTagsEnum.APIS))).toBeTrue();
    expect(component.listProjectsAux.some(project => project.featured)).toBeFalse();
  });

  it('sets home metadata on initialization', () => {
    component.ngOnInit();
    expect(seo.setHomeMetadata).toHaveBeenCalledOnceWith();
  });

  it('opens contact through a shareable query parameter', () => {
    component.openContactModal();
    expect(router.navigate).toHaveBeenCalledWith([], { queryParams: { modal: 'contact' } });
  });
});
