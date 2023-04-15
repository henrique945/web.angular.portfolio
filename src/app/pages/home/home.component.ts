//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { listPositions } from '../../data/positions';
import { listProjects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { PositionInterface } from '../../models/interfaces/position.interface';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  //#region Constructor

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
  ) {}

  //#endregion

  //#region Public Properties

  public listPositions: PositionInterface[] = listPositions;

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

  public projectOrientation: typeof OrientationEnum = OrientationEnum;

  public listProjects: ProjectInterface[] = listProjects;
  public listProjectsAux: ProjectInterface[] = listProjects;

  //#endregion

  //#region Public Functions

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  public filterProjectByTag(tag: ProjectTagsEnum): void {
    this.currentTag = tag;

    if (tag === ProjectTagsEnum.ALL) {
      this.listProjectsAux = this.listProjects;
    }
    else {
      this.listProjectsAux = this.listProjects.filter(project => project.tags.includes(tag));
    }
  }

  public redirectTo(anchor: string): void {
    this.doc.getElementById(anchor)?.scrollIntoView();
  }

  //#endregion

  //#region Private Functions

  @HostListener('window:scroll', ['$event'])
  private onScroll(): void {
    this.toggleOnTop();
  }

  private toggleOnTop(): void {
    const toTopButton = this.doc.getElementById('toTopBtn');

    if (!toTopButton)
      return;

    toTopButton.style.display = 'none';

    if (this.doc.body.scrollTop > 100 || this.doc.documentElement.scrollTop > 100)
      toTopButton.style.display = 'block';
  }

  //#endregion

}
