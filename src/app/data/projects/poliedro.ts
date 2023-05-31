//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const poliedro: ProjectInterface = {
  isActive: true,
  id: 'poliedro',
  name: 'Poliedro P+ Kids',
  coverImage: 'assets/imgs/projects/poliedro/poliedro6.png',
  developmentDate: '14/06/2021 ~ 17/10/2021',
  description: 'Developed in <b>NestJs (NodeJs + PostgresSQL + MongoDB)</b> with <b>Poliedro APIs</b>.\n\n' +
    'App for <b>Poliedro students and guardians</b> that allows access to school information such as <b>schedule</b>, <b>gradebook</b>, <b>messages</b>, <b>tasks</b>, <b>resolutions of material</b> and <b>performance in simulations, with feedbacks and performance analysis</b>.\n\n' +
    'It is organized, easy and practical and had <b>more than 100,000 accesses</b>.',
  outcome: 'Project was a success with more than 100,000 downloads in the store.',
  imageUrls: [
    'assets/imgs/projects/poliedro/poliedro1.png',
    'assets/imgs/projects/poliedro/poliedro2.png',
    'assets/imgs/projects/poliedro/poliedro3.png',
    'assets/imgs/projects/poliedro/poliedro4.png',
    'assets/imgs/projects/poliedro/poliedro5.png',
    'assets/imgs/projects/poliedro/poliedro6.png',
    'assets/imgs/projects/poliedro/poliedro7.png',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.daitangroup.poliedro.activitymanager' },
    { title: 'Poliedro', link: 'https://www.sistemapoliedro.com.br/' },
    { title: 'Panel', link: 'https://pmais-development.p4ed.com/' },
  ],
  tags: [ProjectTagsEnum.APIS],
  techs: [TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
