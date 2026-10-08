//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const usina: ProjectInterface = {
  isActive: true,
  id: 'usina',
  name: 'Usina Cultural',
  coverImage: 'assets/imgs/projects/usina/usina3.thumb.webp',
  developmentDate: '21/01/2021 ~ 30/10/2021',
  description: '<b>Usina Cultural</b> is a public culture platform for the city of Sorocaba and its Usina Cultural venue. It was built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>, with Google, Apple and Facebook sign-in.\n\n' +
    'The platform publishes activities, events and artist profiles focused on culture, entrepreneurship and sustainability.',
  outcome: 'Delivered as a public digital channel for the city’s cultural programming and venue.',
  imageUrls: [
    'assets/imgs/projects/usina/usina1.webp',
    'assets/imgs/projects/usina/usina2.webp',
    'assets/imgs/projects/usina/usina3.webp',
    'assets/imgs/projects/usina/usina4.webp',
    'assets/imgs/projects/usina/usina5.webp',
    'assets/imgs/projects/usina/usina6.webp',
  ],
  links: [
    { title: 'Site', link: 'https://usinacultural.facens.br/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
