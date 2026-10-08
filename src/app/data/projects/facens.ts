//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const facens: ProjectInterface = {
  isActive: true,
  id: 'facens',
  name: 'Facens',
  coverImage: 'assets/imgs/projects/facens/facens1.thumb.webp',
  developmentDate: '15/10/2019 ~ 15/10/2020',
  description: 'The <b>Facens</b> student app combines <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b> with the university’s authentication system.\n\n' +
    'Students can review grades, absences and class schedules, participate in university events and access a digital student ID from one application.',
  outcome: 'The app passed 10,000 downloads and received a 4.8/5 Play Store rating.',
  imageUrls: [
    'assets/imgs/projects/facens/facens1.webp',
    'assets/imgs/projects/facens/facens2.webp',
    'assets/imgs/projects/facens/facens3.webp',
    'assets/imgs/projects/facens/facens4.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.facens' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/facens/id1217538800' },
    { title: 'Facens', link: 'https://facens.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
