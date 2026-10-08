//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const villaFlora: ProjectInterface = {
  isActive: true,
  id: 'villaFlora',
  name: 'Villa Flora',
  coverImage: 'assets/imgs/projects/villa-flora/flora4.thumb.webp',
  developmentDate: '09/08/2021 ~ 20/09/2021',
  description: 'An <b>Angular PWA</b> hosted on <b>AWS</b> for presenting the Villa Flora condominium.\n\n' +
    'Prospective buyers can explore an interactive Leaflet map, open an embedded Kulla virtual tour, review development information and watch aerial footage.',
  outcome: 'The presentation remained in use by the sales team and received updates as new parts of the development became available.',
  imageUrls: [
    'assets/imgs/projects/villa-flora/flora1.webp',
    'assets/imgs/projects/villa-flora/flora2.webp',
    'assets/imgs/projects/villa-flora/flora3.webp',
    'assets/imgs/projects/villa-flora/flora4.webp',
    'assets/imgs/projects/villa-flora/flora5.webp',
    'assets/imgs/projects/villa-flora/flora6.webp',
    'assets/imgs/projects/villa-flora/flora7.webp',
  ],
  links: [
    { title: 'Site', link: 'https://site.totem-villa-flora.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB],
  techs: [TechEnum.ANGULAR, TechEnum.PWA],
  orientation: OrientationEnum.HORIZONTAL,
};
