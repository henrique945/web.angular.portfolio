import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DOCUMENT, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { listPositions } from '../../data/positions';
import { listProjects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { PositionInterface } from '../../models/interfaces/position.interface';
import { ProjectInterface } from '../../models/interfaces/project.interface';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public readonly listPositions: PositionInterface[] = listPositions;
  public readonly listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);
  public readonly projectOrientation = OrientationEnum;
  public readonly featuredProjects = listProjects.filter(project => project.featured);
  public readonly archiveProjects = listProjects.filter(project => !project.featured);
  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;
  public listProjectsAux: ProjectInterface[] = this.archiveProjects;

  private revealObserver?: IntersectionObserver;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly router: Router,
    private readonly seo: SeoService,
  ) {}

  public ngOnInit(): void {
    this.seo.setHomeMetadata();
  }

  public ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId))
      this.initializeReveals();
  }

  public filterProjectByTag(tag: ProjectTagsEnum): void {
    this.currentTag = tag;
    this.listProjectsAux = tag === ProjectTagsEnum.ALL
      ? this.archiveProjects
      : this.archiveProjects.filter(project => project.tags.includes(tag));
    const view = this.document.defaultView;
    if (typeof view?.requestAnimationFrame === 'function')
      view.requestAnimationFrame(() => this.revealVisibleItems());
    else
      this.revealVisibleItems();
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  public projectTags(project: ProjectInterface): string {
    return project.tags.join(', ');
  }

  public ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.document.documentElement.classList.remove('js');
  }

  private initializeReveals(): void {
    const view = this.document.defaultView;
    if (!view)
      return;

    this.document.documentElement.classList.add('js');
    if (!('IntersectionObserver' in view)) {
      this.revealVisibleItems();
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

    Array.from(this.document.querySelectorAll('.reveal')).forEach((element, index) => {
      if (element.closest('.timeline') || element.closest('.archive'))
        (element as HTMLElement).style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
      this.revealObserver?.observe(element);
    });
  }

  private revealVisibleItems(): void {
    Array.from(this.document.querySelectorAll('.reveal')).forEach(element => element.classList.add('is-visible'));
  }
}
