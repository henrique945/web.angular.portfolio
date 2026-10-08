//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const fablab: ProjectInterface = {
  isActive: true,
  id: 'fablab',
  name: 'Fablab',
  coverImage: 'assets/imgs/projects/fablab/fablab1.thumb.webp',
  developmentDate: '15/10/2019 ~ 15/10/2020',
  description: 'A tablet-oriented community platform built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b> for Fablab members to share projects and knowledge.\n\n' +
    'The product includes achievements, machine training, project and item publishing, likes and comments.',
  outcome: 'Development reached the testing phase, but Fablab chose not to continue the project.',
  imageUrls: [
    'assets/imgs/projects/fablab/fablab1.webp',
    'assets/imgs/projects/fablab/fablab2.webp',
    'assets/imgs/projects/fablab/fablab3.webp',
    'assets/imgs/projects/fablab/fablab4.webp',
    'assets/imgs/projects/fablab/fablab5.webp',
    'assets/imgs/projects/fablab/fablab6.webp',
    'assets/imgs/projects/fablab/fablab7.webp',
  ],
  links: [
    { title: 'Fablab', link: 'https://fablab.studio/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
