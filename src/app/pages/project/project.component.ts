import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DOCUMENT, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { formattedTechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: false,
})
export class ProjectComponent implements OnInit, AfterViewInit, OnDestroy {
  public projectId = '';
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
  public tags = '';
  public techs = '';
  public descriptionParagraphs: string[] = [];
  public readonly verticalOrientation = OrientationEnum.VERTICAL;

  private revealObserver?: IntersectionObserver;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly seo: SeoService,
  ) {
    this.projectId = this.route.snapshot.params['id'] || '';
  }

  public ngOnInit(): void {
    const project = projects.find(item => item.id === this.projectId);
    if (!project) {
      void this.router.navigateByUrl('/not-found');
      return;
    }

    this.project = project;
    this.tags = project.tags.join(', ');
    this.techs = project.techs.map(tech => formattedTechEnum[tech]).join(', ');
    this.descriptionParagraphs = project.description.split(/\n\s*\n/).map(paragraph => paragraph.trim()).filter(Boolean);
    this.seo.setProjectMetadata(project);
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId))
      return;

    const view = this.document.defaultView;
    if (!view)
      return;

    this.document.documentElement.classList.add('js');
    if (!('IntersectionObserver' in view)) {
      this.revealAll();
      return;
    }

    this.revealObserver = new view.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.from(this.document.querySelectorAll('.reveal')).forEach(element => this.revealObserver?.observe(element));
  }

  public openZoom(index: number): void {
    void this.router.navigate([], {
      queryParams: { modal: 'image', project: this.project.id, image: index },
      queryParamsHandling: 'merge',
    });
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  public ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.document.documentElement.classList.remove('js');
  }

  private revealAll(): void {
    Array.from(this.document.querySelectorAll('.reveal')).forEach(element => element.classList.add('is-visible'));
  }
}
