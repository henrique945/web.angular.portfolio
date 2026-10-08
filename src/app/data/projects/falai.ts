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
  coverImage: 'assets/imgs/projects/falai/falai7.thumb.webp',
  developmentDate: '02/07/2021 ~ 17/08/2022',
  description: '<b>Falai</b> is an <b>Ionic/Angular</b> civic-request app created for Sorocaba in partnership with SPLICE and later offered to other cities.\n\n' +
    'Citizens can report and track local issues on an interactive <b>Leaflet</b> map with address search and clustered request markers.',
  outcome: 'The app reached citizens in multiple municipalities, while continued adoption depended on operational support from each city hall.',
  imageUrls: [
    'assets/imgs/projects/falai/falai1.webp',
    'assets/imgs/projects/falai/falai2.webp',
    'assets/imgs/projects/falai/falai3.webp',
    'assets/imgs/projects/falai/falai4.webp',
    'assets/imgs/projects/falai/falai5.webp',
    'assets/imgs/projects/falai/falai6.webp',
    'assets/imgs/projects/falai/falai7.webp',
    'assets/imgs/projects/falai/falai8.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.falai' },
    { title: 'Splice', link: 'https://www.splicegroup.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
};
