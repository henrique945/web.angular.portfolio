//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ncursos: ProjectInterface = {
  isActive: true,
  id: 'ncursos',
  name: 'NCursos',
  coverImage: 'assets/imgs/projects/ncursos/ncursos1.thumb.webp',
  developmentDate: '16/08/2021 ~ 27/05/2022',
  description: '<b>NCursos</b> is an online course platform for university students, built with <b>Angular, NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'It supports course and learning-track creation, integrates with Facens authentication and uses Hotjar to understand user behavior.',
  outcome: 'The platform launched, generated course sales and enrolled students, although adoption remained moderate.',
  imageUrls: [
    'assets/imgs/projects/ncursos/ncursos1.webp',
    'assets/imgs/projects/ncursos/ncursos2.webp',
    'assets/imgs/projects/ncursos/ncursos3.webp',
    'assets/imgs/projects/ncursos/ncursos4.webp',
    'assets/imgs/projects/ncursos/ncursos5.webp',
  ],
  links: [
    { title: 'Site', link: 'https://www.ncursosedu.com.br/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
