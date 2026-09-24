//#region Imports


import { Component, HostListener, Inject, OnInit, DOCUMENT } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { formattedTechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';
import { SeoService } from '../../seo.service';

//#endregion

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    standalone: false
})
export class ProjectComponent implements OnInit {

  //#region Constructor

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly seo: SeoService,
  ) {
    this.projectId = this.route.snapshot.params['id'] || '';
  }

  //#endregion

  //#region Public Properties

  public projectId: string = '';

  public listProjects: ProjectInterface[] = projects;

  public project: ProjectInterface = {
    isActive: true,
    id: '',
    name: '',
    developmentDate: '',
    coverImage: '',
    description: '',
    outcome: '',
    imageUrls: [],
    techs: [],
    orientation: OrientationEnum.HORIZONTAL,
    tags: [],
    links: [],
  };

  public tags: string = '';
  public techs: string = '';

  public readonly verticalOrientation = OrientationEnum.VERTICAL;

  public readonly portraitGalleryImages = new Set<string>();

  //#endregion

  //#region Public Functions

  public ngOnInit(): void {
    const project = this.listProjects.find(i => i.id === this.projectId);

    if (project) {
      this.project = project;
      this.seo.setProjectMetadata(project);
    } else {
      void this.router.navigateByUrl('/not-found');
      return;
    }

    this.formatTags();
    this.formatTechs();
  }

  public async openZoom(image: string): Promise<void> {
    await this.router.navigate([], { queryParams: { modal: 'img|' + image } });
  }

  public topFunction(): void {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  public setGalleryImageOrientation(imagePath: string, event: Event): void {
    const image = event.currentTarget as HTMLImageElement | null;

    if (image?.naturalHeight && image.naturalHeight > image.naturalWidth)
      this.portraitGalleryImages.add(imagePath);
    else
      this.portraitGalleryImages.delete(imagePath);
  }

  //#endregion

  //#region Private Functions

  private formatTags(): void {
    this.tags = this.project.tags.join(', ');
  }

  private formatTechs(): void {
    this.techs = this.project.techs.map(tech => formattedTechEnum[tech]).join(', ');
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    this.toggleOnTop();
  }

  private toggleOnTop(): void {
    const toTopButton = this.doc.getElementById('toTopBtn');

    if (!toTopButton)
      return;

    toTopButton.style.display = 'none';

    if ((this.doc.defaultView?.scrollY || 0) > 300)
      toTopButton.style.display = 'block';
  }

  //#endregion

}
