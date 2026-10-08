//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const dpr: ProjectInterface = {
  isActive: true,
  id: 'dpr',
  name: 'DPR',
  coverImage: 'assets/imgs/projects/dpr/dpr3.thumb.webp',
  developmentDate: '09/04/2020 ~ 02/07/2020',
  description: '<b>DPR</b> is a gamified training application for employees of the Brazilian telecommunications company. It combines a <b>Unity</b> client with <b>NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'The experience includes a mission board, competitive challenges and unlockable activities.',
  outcome: 'Delivered for DPR’s internal use; later adoption data was not available to the delivery team.',
  imageUrls: [
    'assets/imgs/projects/dpr/dpr1.webp',
    'assets/imgs/projects/dpr/dpr2.webp',
    'assets/imgs/projects/dpr/dpr3.webp',
    'assets/imgs/projects/dpr/dpr4.webp',
    'assets/imgs/projects/dpr/dpr5.webp',
    'assets/imgs/projects/dpr/dpr6.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.trainingdpr/' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/dpr-training/id1608388470' },
    { title: 'DPR', link: 'https://www.dpr.com.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.UNITY, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
