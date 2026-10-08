//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const proton: ProjectInterface = {
  isActive: true,
  id: 'proton',
  name: 'Proton',
  coverImage: 'assets/imgs/projects/proton/proton5.thumb.webp',
  developmentDate: '03/08/2020 ~ 05/07/2021',
  description: '<b>Proton</b> is a financial-news app and PWA built for ATOM S/A with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>. It supports Apple and Facebook sign-in.\n\n' +
    '<b>EventBridge</b> refreshes content from RSS feeds including BBC, Globo and UOL, and users can read, comment on, like and save articles.',
  outcome: 'The app launched, but limited promotion constrained its public reach and adoption.',
  imageUrls: [
    'assets/imgs/projects/proton/proton1.webp',
    'assets/imgs/projects/proton/proton2.webp',
    'assets/imgs/projects/proton/proton3.webp',
    'assets/imgs/projects/proton/proton4.webp',
    'assets/imgs/projects/proton/proton5.webp',
    'assets/imgs/projects/proton/proton6.webp',
    'assets/imgs/projects/proton/proton7.webp',
  ],
  links: [
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/proton/id1558126352' },
    { title: 'Atom', link: 'https://atomeducacional.com.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS, TechEnum.PWA],
  orientation: OrientationEnum.VERTICAL,
};
