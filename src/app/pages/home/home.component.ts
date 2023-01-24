//#region Imports

import { Component } from '@angular/core';
import { PositionInterface } from '../../models/interfaces/position.interface';

//#endregion

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //#region Public Properties

  public listPositions: PositionInterface[] = [
    {
      name: 'Junior',
      description: 'Desenvolver Junior na empresa InfoJr da Unesp de Rio Claro atuando como desenvolvedor web',
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
      description: 'Sócio CTO da startup Educaprat, plataforma de educação',
      backgroundColor: '#263138',
      fontColor: '#445964',
    },
  ]

  //#endregion

}
