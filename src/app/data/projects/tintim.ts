//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const tintim: ProjectInterface = {
  isActive: true,
  id: 'tintim',
  name: 'Tintim',
  coverImage: 'assets/imgs/projects/tintim/tintim9.thumb.webp',
  developmentDate: '17/09/2022 ~ 28/04/2023',
  description: '<b>Tintim</b> is a white-label employee engagement app built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>. Employees complete missions and quizzes to earn points and rewards.\n\n' +
    'A shared product template supports each company’s authentication, branding, missions, catalog and program rules.',
  outcome: 'Four organizations—Summit, CEMIG, Facens and Newton—adopted the platform, reaching more than 1,000 employees.',
  imageUrls: [
    'assets/imgs/projects/tintim/tintim1.webp',
    'assets/imgs/projects/tintim/tintim2.webp',
    'assets/imgs/projects/tintim/tintim3.webp',
    'assets/imgs/projects/tintim/tintim4.webp',
    'assets/imgs/projects/tintim/tintim5.webp',
    'assets/imgs/projects/tintim/tintim6.webp',
    'assets/imgs/projects/tintim/tintim7.webp',
    'assets/imgs/projects/tintim/tintim8.webp',
    'assets/imgs/projects/tintim/tintim9.webp',
    'assets/imgs/projects/tintim/tintim10.webp',
    'assets/imgs/projects/tintim/tintim11.webp',
    'assets/imgs/projects/tintim/tintim12.webp',
    'assets/imgs/projects/tintim/tintim13.webp',
    'assets/imgs/projects/tintim/tintim14.webp',
    'assets/imgs/projects/tintim/tintim15.webp',
    'assets/imgs/projects/tintim/tintim16.webp',
    'assets/imgs/projects/tintim/tintim17.webp',
  ],
  links: [
    { title: 'Play Store Summit', link: 'https://play.google.com/store/apps/details?id=com.liga.tintim.summit' },
    { title: 'Play Store CEMIG', link: 'https://play.google.com/store/apps/details?id=com.liga.tintim.cemigrun' },
    { title: 'Play Store Newton', link: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.newton' },
    { title: 'Play Store Facens', link: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.facens' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
