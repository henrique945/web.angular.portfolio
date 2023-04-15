//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projects } from '../../data/projects';
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
export class HomeComponent implements OnInit {

  //#region Constructor

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private readonly router: Router,
  ) {}

  //#endregion

  //#region Public Properties

  public listPositions: PositionInterface[] = [
    {
      name: 'Junior',
      description: 'Develop Junior at InfoJr from Unesp in Rio Claro acting as a web developer',
      backgroundColor: '#263138',
    },
    {
      name: 'Full-Stack Engineer at Liga Facens',
      description: '+4 years of experience building: \n\n' +
        '• Mobile apps built with Ionic/Angular (HTML5, SASS, Typescript) for a variety of businesses and government organizations.\n\n' +
        '• REST APIs architectured in NestJS (NodeJs + PostgresSQL) for deployment within AWS using AWS Lambda and integrating with services such as S3, Api Gateway, SQS, SNS, SES, Cloudfront',
      backgroundColor: '#445964',
    },
    {
      name: 'Partner',
      description: 'CTO Partner at Startup Educaprat, education platform',
      backgroundColor: '#263138',
    },
  ];

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

  public projectOrientation: typeof OrientationEnum = OrientationEnum;

  public listProjects: ProjectInterface[] = projects;
  public listProjectsAux: ProjectInterface[] = [];

  //#endregion

  //#region Public Functions

  public ngOnInit(): void {
    this.listProjects = this.listProjects.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);
    this.listProjectsAux = this.listProjects;
  }

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
