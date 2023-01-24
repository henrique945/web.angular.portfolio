//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { PositionInterface } from '../../models/interfaces/position.interface';

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
      fontColor: '#445964',
    },
    {
      name: 'Especialista',
      description: 'Especialista Techlead na empresa Liga Facens, comandando um time de mais de 20 desenvolvedores com mais de 30 aplicações produzidas, atuando também como desenvolvedor FrontEnd (Ionic/Angular) e Backend (NestJs/NodeJs)',
      backgroundColor: '#445964',
      fontColor: '#263138',
    },
    {
      name: 'Sócio',
      description: 'Sócio CTO da Startup Educaprat, plataforma de educação',
      backgroundColor: '#263138',
      fontColor: '#445964',
    },
  ];

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

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
