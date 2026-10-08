//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const emerson: ProjectInterface = {
  isActive: true,
  id: 'emerson',
  name: 'Emerson',
  coverImage: 'assets/imgs/projects/emerson/emerson2.thumb.webp',
  developmentDate: '20/07/2020 ~ 17/08/2020',
  description: 'An <b>Angular and NestJS</b> product catalog for Emerson Electric, organized by category and containing more than <b>1,000 products</b>.\n\n' +
    'A separate import script automated the initial upload of product records, PDF documents and images.',
  outcome: 'The catalog and import process were completed and populated, but subsequent customer adoption was limited.',
  imageUrls: [
    'assets/imgs/projects/emerson/emerson1.webp',
    'assets/imgs/projects/emerson/emerson2.webp',
  ],
  links: [
    { title: 'Emerson', link: 'https://www.emerson.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
