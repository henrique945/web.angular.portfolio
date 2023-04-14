//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const dpr: ProjectInterface = {
  id: 'dpr',
  name: 'DPR',
  coverImage: 'assets/imgs/projects/dpr/dpr1.png',
  developmentDate: '09/04/2020 ~ 02/07/2020',
  description: 'Developed in <b>Unity (C#)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>.\n' +
    '\n' +
    'DPR is a training application for DPR telecommunications (Brazil) employees in a gamified environment.\n' +
    'With access to a mission board, several competitive challenges, activities to buy and much more.\n',
  outcome: 'Project for internal use by the DPR company, we do not have access to further results.',
  imageUrls: [
    'assets/imgs/projects/dpr/dpr1.png',
    'assets/imgs/projects/dpr/dpr2.png',
    'assets/imgs/projects/dpr/dpr3.png',
    'assets/imgs/projects/dpr/dpr4.png',
    'assets/imgs/projects/dpr/dpr5.png',
    'assets/imgs/projects/dpr/dpr6.png',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.trainingdpr/' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/dpr-training/id1608388470' },
    { title: 'DPR', link: 'https://www.dpr.com.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.UNITY, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  position: 8,
};
