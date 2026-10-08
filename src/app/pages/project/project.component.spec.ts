import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../seo.service';
import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  function create(projectId: string) {
    const route = { snapshot: { params: { id: projectId } } } as unknown as ActivatedRoute;
    const router = jasmine.createSpyObj<Router>('Router', ['navigate', 'navigateByUrl']);
    const seo = jasmine.createSpyObj<SeoService>('SeoService', ['setProjectMetadata']);
    return { component: new ProjectComponent(document, 'browser', route, router, seo), router, seo };
  }

  it('resolves a project and applies project metadata', () => {
    const { component, seo } = create('icanotes');
    component.ngOnInit();

    expect(component.project.id).toBe('icanotes');
    expect(component.techs).toContain('Angular');
    expect(component.engineeringImprovements.length).toBeGreaterThan(0);
    expect(component.imageCaptions.length).toBe(component.project.imageUrls.length);
    expect(component.coverCaption.length).toBeGreaterThan(0);
    expect(seo.setProjectMetadata).toHaveBeenCalledWith(component.project);
  });

  it('creates accessible caption fallbacks for legacy projects', () => {
    const { component } = create('uqr');
    component.ngOnInit();

    expect(component.coverCaption).toBe(`${component.project.name} project overview`);
    expect(component.imageCaptions[0]).toBe(`${component.project.name} product view 1`);
  });

  it('sends unknown projects to the not-found page', () => {
    const { component, router } = create('missing-project');
    component.ngOnInit();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/not-found');
  });
});
