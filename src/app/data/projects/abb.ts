//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const abb: ProjectInterface = {
  isActive: true,
  id: 'abb',
  name: 'ABB',
  coverImage: 'assets/imgs/projects/abb/abb1.thumb.webp',
  developmentDate: '06/12/2021 ~ 17/01/2022',
  description: 'An <b>Angular</b> portal for distributing ABB’s latest virtual-reality training package through <b>AWS Lambda and S3</b>.\n\n' +
    'The portal supports English, Spanish and Portuguese and gives employees a direct way to download the approximately <b>1 GB</b> Android package used by the VR headset.',
  outcome: 'Delivered a focused internal distribution channel for ABB’s virtual-reality training package.',
  imageUrls: [
    'assets/imgs/projects/abb/abb1.webp',
    'assets/imgs/projects/abb/abb2.webp',
    'assets/imgs/projects/abb/abb3.webp',
  ],
  links: [
    { title: 'Site', link: 'https://www.abb-download.ligafacens.com/' },
    { title: 'ABB Global', link: 'https://global.abb/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
