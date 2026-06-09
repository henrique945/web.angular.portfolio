//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const uqr: ProjectInterface = {
  isActive: true,
  id: 'uqr',
  name: 'UQR Educação',
  coverImage: 'assets/imgs/projects/uqr/uqr-login.png',
  developmentDate: '2022 ~ 2023',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgreSQL)</b> with <b>AWS Cloud</b>.\n\n' +
    'White-label educational platform for the real estate market, deployed as <b>Universidade UQR</b> and <b>IQR Educação</b> — two branded tenants on the same architecture.\n\n' +
    'The platform includes course catalogs, video lessons, user progress tracking and a customized learning experience per tenant.',
  outcome: 'Platform deployed and actively used for online courses and educational content delivery across both brands.',
  imageUrls: [
    'assets/imgs/projects/uqr/uqr-login.png',
  ],
  links: [
    { title: 'Universidade UQR', link: 'https://www.universidadeuqr.com.br/' },
    { title: 'IQR Educação', link: 'https://iqreducacao.com.br/' },
  ],
  tags: [ProjectTagsEnum.WEB],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
