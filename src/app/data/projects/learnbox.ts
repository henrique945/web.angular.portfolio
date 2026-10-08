//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const learnbox: ProjectInterface = {
  isActive: true,
  id: 'learnbox',
  name: 'Learnbox',
  coverImage: 'assets/imgs/projects/learnbox/learnbox5.thumb.webp',
  developmentDate: '27/04/2020 ~ 29/10/2021',
  description: '<b>Learnbox</b> is a collectors’ social platform built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'Members can create and maintain collections, publish them for others to discover, and interact through comments and favorites.',
  outcome: 'Development was completed, but usage remained limited within its specialized collector audience.',
  imageUrls: [
    'assets/imgs/projects/learnbox/learnbox1.webp',
    'assets/imgs/projects/learnbox/learnbox2.webp',
    'assets/imgs/projects/learnbox/learnbox4.webp',
    'assets/imgs/projects/learnbox/learnbox5.webp',
    'assets/imgs/projects/learnbox/learnbox6.webp',
    'assets/imgs/projects/learnbox/learnbox8.webp',
    'assets/imgs/projects/learnbox/learnbox9.webp',
    'assets/imgs/projects/learnbox/learnbox10.webp',
    'assets/imgs/projects/learnbox/learnbox11.webp',
    'assets/imgs/projects/learnbox/learnbox12.webp',
    'assets/imgs/projects/learnbox/learnbox13.webp',
    'assets/imgs/projects/learnbox/learnbox14.webp',
    'assets/imgs/projects/learnbox/learnbox15.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.learnbox' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
