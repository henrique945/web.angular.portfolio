//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const mundoFacens: ProjectInterface = {
  isActive: true,
  id: 'mundoFacens',
  name: 'Mundo Facens',
  coverImage: 'assets/imgs/projects/mundo-facens/mundo5.thumb.webp',
  developmentDate: '20/10/2022 ~ 25/01/2023',
  description: '<b>Mundo Facens</b> is a <b>React PWA</b> with a <b>NestJS and PostgreSQL</b> backend on AWS, created for the university’s engineering week.\n\n' +
    'Students completed questions, videos and mini-games that expanded their subject knowledge and contributed to their final score.',
  outcome: 'Approximately 4,000 university students participated in the activity.',
  imageUrls: [
    'assets/imgs/projects/mundo-facens/mundo1.webp',
    'assets/imgs/projects/mundo-facens/mundo2.webp',
    'assets/imgs/projects/mundo-facens/mundo3.webp',
    'assets/imgs/projects/mundo-facens/mundo4.webp',
    'assets/imgs/projects/mundo-facens/mundo5.webp',
  ],
  links: [
    { title: 'Site', link: 'https://mundo.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.REACT, TechEnum.PWA, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
