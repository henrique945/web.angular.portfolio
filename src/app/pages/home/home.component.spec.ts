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
    component = new HomeComponent(document, 'browser', router, seo);
  });

  it('orders the four primary case studies', () => {
    expect(component.primaryProjects.map(project => project.id)).toEqual([
      'icanotes',
      'controleaki',
      'bolao-uol',
      'eclub',
    ]);
  });

  it('keeps the three scale highlights separate from the primary cases', () => {
    expect(component.impactProjects.map(project => project.id)).toEqual([
      'poliedro',
      'vaccine',
      'checkinCampus',
    ]);

    const selectedIds = new Set([
      ...component.primaryProjects,
      ...component.impactProjects,
    ].map(project => project.id));
    expect(component.archiveProjects.every(project => !selectedIds.has(project.id))).toBeTrue();
    expect(selectedIds.size).toBe(7);
  });

  it('does not expose selected work twice in the archive', () => {
    const visibleIds = [
      ...component.primaryProjects,
      ...component.impactProjects,
      ...component.archiveProjects,
    ].map(project => project.id);

    expect(new Set(visibleIds).size).toBe(visibleIds.length);
  });

  it('filters only the secondary project archive', () => {
    component.filterProjectByTag(ProjectTagsEnum.APIS);

    expect(component.listProjectsAux.length).toBeGreaterThan(0);
    expect(component.listProjectsAux.every(project => project.tags.includes(ProjectTagsEnum.APIS))).toBeTrue();
    expect(component.listProjectsAux.every(project => component.archiveProjects.includes(project))).toBeTrue();
  });

  it('falls back to the outcome when an archived project has no summary', () => {
    const project = component.archiveProjects.find(item => !item.summary);
    expect(project).toBeDefined();
    expect(component.projectSummary(project!)).toBe(project!.outcome);
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
