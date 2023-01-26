//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { abb } from '../../data/projects/abb';
import { checkinCampus } from '../../data/projects/checkin-campus';
import { facens } from '../../data/projects/facens';
import { learnbox } from '../../data/projects/learnbox';
import { sennaKids } from '../../data/projects/senna-kids';
import { uqr } from '../../data/projects/uqr';
import { yesno } from '../../data/projects/yesno';
import { zoologico } from '../../data/projects/zoologico';
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

  public listPositions: PositionInterface[] = [
    {
      name: 'Júnior',
      description: 'Desenvolver Júnior na empresa InfoJr da Unesp de Rio Claro atuando como desenvolvedor web',
      backgroundColor: '#263138',
    },
    {
      name: 'Especialista',
      description: 'Especialista Techlead na empresa Liga Facens, comandando um time de mais de 20 desenvolvedores com mais de 30 aplicações produzidas, atuando também como desenvolvedor FrontEnd (Ionic/Angular) e Backend (NestJs/NodeJs)',
      backgroundColor: '#445964',
    },
    {
      name: 'Sócio',
      description: 'Sócio CTO da Startup Educaprat, plataforma de educação',
      backgroundColor: '#263138',
    },
  ];

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

  public projectOrientation: typeof OrientationEnum = OrientationEnum;

  public listProjects: ProjectInterface[] = [
    uqr,
    facens,
    abb,
    yesno,
    checkinCampus,
    zoologico,
    learnbox,
  ];

  //#endregion

  //#region Public Functions

  @HostListener('window:scroll', ['$event'])
  private onScroll(): void {
    this.toggleOnTop();
  }

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  //#endregion

  //#region Private Functions

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
