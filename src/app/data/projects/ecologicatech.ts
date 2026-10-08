//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ecologicatech: ProjectInterface = {
  isActive: true,
  id: 'ecologicatech',
  name: 'Ecologicatech',
  coverImage: 'assets/imgs/projects/ecologicatech/eco9.thumb.webp',
  developmentDate: '13/03/2023 ~ 14/04/2023',
  description: '<b>Ecologicatech</b> is an environmental event platform built for Aguama with <b>Angular, NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'Event responses and <b>Google Maps APIs</b> are used to estimate travel distance, transport-related carbon emissions and the number of trees required for compensation.',
  outcome: 'The platform was used at live events, beginning with the MMA Impact Brasil conference in São Paulo.',
  imageUrls: [
    'assets/imgs/projects/ecologicatech/eco1.webp',
    'assets/imgs/projects/ecologicatech/eco2.webp',
    'assets/imgs/projects/ecologicatech/eco3.webp',
    'assets/imgs/projects/ecologicatech/eco4.webp',
    'assets/imgs/projects/ecologicatech/eco5.webp',
    'assets/imgs/projects/ecologicatech/eco8.webp',
    'assets/imgs/projects/ecologicatech/eco9.webp',
    'assets/imgs/projects/ecologicatech/eco6.webp',
    'assets/imgs/projects/ecologicatech/eco7.webp',
  ],
  links: [
    { title: 'Control Panel', link: 'https://backoffice.ecologicatech.ligafacens.com/' },
    { title: 'Aguama', link: 'https://www.aguama.com.br/' },
    { title: 'MMA', link: 'https://www.mmaglobal.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
