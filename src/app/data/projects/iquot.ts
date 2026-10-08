//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const iquot: ProjectInterface = {
  isActive: true,
  id: 'iquot',
  name: 'Iquot',
  coverImage: 'assets/imgs/projects/iquot/iquot7.thumb.webp',
  developmentDate: '17/01/2022 ~ 14/03/2022',
  description: '<b>Iquot</b> is a construction-material quotation service backed by <b>NestJS, PostgreSQL</b> and <b>AWS</b>. Buyers compare offers from stores and manufacturers, while Google geocoding calculates distances between sellers and customers.\n\n' +
    '<b>EventBridge</b> closes expired requests and triggers quote notifications, and <b>Amazon SNS</b> sends SMS updates when an offer is accepted.',
  outcome: 'The workflow was delivered with its scheduled and messaging integrations, but public adoption remained limited.',
  imageUrls: [
    'assets/imgs/projects/iquot/iquot1.webp',
    'assets/imgs/projects/iquot/iquot2.webp',
    'assets/imgs/projects/iquot/iquot3.webp',
    'assets/imgs/projects/iquot/iquot4.webp',
    'assets/imgs/projects/iquot/iquot5.webp',
    'assets/imgs/projects/iquot/iquot6.webp',
    'assets/imgs/projects/iquot/iquot7.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.android.iquot' },
    { title: 'Control Panel', link: 'https://backoffice-dev.iquot.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.APIS],
  techs: [TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
