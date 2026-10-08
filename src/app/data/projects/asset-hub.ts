//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const assetHub: ProjectInterface = {
  isActive: true,
  id: 'assetHub',
  name: 'Asset Hub',
  coverImage: 'assets/imgs/projects/hub/hub1.thumb.webp',
  developmentDate: '08/08/2022 ~ 04/12/2022',
  description: '<b>Asset Hub</b> is a searchable internal catalog built with <b>React, NestJS, PostgreSQL</b> and <b>AWS Lambda and S3</b>, integrated with Facens authentication.\n\n' +
    'Teams can publish projects and reusable 3D assets, audio, images and videos, organize them with tags and preview 3D models directly in the browser.',
  outcome: 'The catalog was used internally, with positive feedback about making shared resources easier to find and reuse.',
  imageUrls: [
    'assets/imgs/projects/hub/hub1.webp',
    'assets/imgs/projects/hub/hub2.webp',
    'assets/imgs/projects/hub/hub3.webp',
  ],
  links: [
    { title: 'Site', link: 'https://acontece-facens.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.REACT, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
