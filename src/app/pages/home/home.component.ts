
import { Component, HostListener, Inject, OnInit, DOCUMENT } from '@angular/core';
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
    standalone: false
})
export class HomeComponent implements OnInit {
  public readonly listPositions: PositionInterface[] = listPositions;
  public readonly listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);
  public readonly projectOrientation = OrientationEnum;
  public readonly featuredProjects = listProjects.filter(project => project.featured);
  public readonly archiveProjects = listProjects.filter(project => !project.featured);
  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;
  public listProjectsAux: ProjectInterface[] = this.archiveProjects;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
    private readonly seo: SeoService,
  ) {}

  public ngOnInit(): void {
    this.seo.setHomeMetadata();
  }

  public topFunction(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public filterProjectByTag(tag: ProjectTagsEnum): void {
    this.currentTag = tag;
    this.listProjectsAux = tag === ProjectTagsEnum.ALL
      ? this.archiveProjects
      : this.archiveProjects.filter(project => project.tags.includes(tag));
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    const button = this.document.getElementById('toTopBtn');
    if (button)
      button.style.display = (this.document.defaultView?.scrollY || 0) > 300 ? 'block' : 'none';
  }
}
