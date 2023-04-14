//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const villaFlora: ProjectInterface = {
  id: 'villaFlora',
  name: 'Villa Flora',
  coverImage: 'assets/imgs/projects/villa-flora/flora4.PNG',
  developmentDate: '09/08/2021 ~ 20/09/2021',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> as a <b>PWA</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and <b>embed with Kulla Virtual Tour</b>.\n' +
    'Display site created for the <b>Villa Flora</b> condominium.\n' +
    '\n' +
    'Exhibition site created for the <b>Villa Flora</b> condominium.\n' +
    'The customer can interact with the condominium map, walk through the virtual tour and see various information in addition to watching the aerial video (by drone).\n',
  outcome: 'It still receives some updates to sell new parts of the condominium and is constantly accessible in the sales area.',
  imageUrls: [
    'assets/imgs/projects/villa-flora/flora1.PNG',
    'assets/imgs/projects/villa-flora/flora2.PNG',
    'assets/imgs/projects/villa-flora/flora3.PNG',
    'assets/imgs/projects/villa-flora/flora4.PNG',
    'assets/imgs/projects/villa-flora/flora5.PNG',
    'assets/imgs/projects/villa-flora/flora6.PNG',
    'assets/imgs/projects/villa-flora/flora7.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://site.totem-villa-flora.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB],
  techs: [TechEnum.ANGULAR, TechEnum.PWA],
  orientation: OrientationEnum.HORIZONTAL,
  position: 10,
};
