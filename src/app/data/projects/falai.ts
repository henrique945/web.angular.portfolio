//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const falai: ProjectInterface = {
  isActive: true,
  id: 'falai',
  name: 'Falai',
  coverImage: 'assets/imgs/projects/falai/falai7.PNG',
  developmentDate: '02/07/2021 ~ 17/08/2022',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>integrated with Leaflet (map + geosearch + markercluster)</b> library for Maps.\n\n' +
    '<b>Falai</b> was developed for the <b>city of Sorocaba</b> in parternership with <b>SPLICE</b> (SpliceGroup provides a wide-range of end-to-end fibre connectivity solutions helping to connect organizations, homes and people around the globel) and sold to several cities.\n\n' +
    'Within the app, the citizen can <b>open</b> and <b>control requests</b> about the city\'s problems, focused on integrating the system with <b>city maps, being able to search for your street and group your created requests</b>.\n',
  outcome: 'Project was more accepted by citizens but needs support from each city hall.',
  imageUrls: [
    'assets/imgs/projects/falai/falai1.PNG',
    'assets/imgs/projects/falai/falai2.PNG',
    'assets/imgs/projects/falai/falai3.PNG',
    'assets/imgs/projects/falai/falai4.PNG',
    'assets/imgs/projects/falai/falai5.PNG',
    'assets/imgs/projects/falai/falai6.PNG',
    'assets/imgs/projects/falai/falai7.PNG',
    'assets/imgs/projects/falai/falai8.PNG',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.falai' },
    { title: 'Splice', link: 'https://www.splicegroup.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
  position: 21,
};
