//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const toolbox: ProjectInterface = {
  isActive: true,
  id: 'toolbox',
  name: 'Toolbox',
  coverImage: 'assets/imgs/projects/toolbox/toolbox2.thumb.webp',
  developmentDate: '21/01/2021 ~ 30/10/2021',
  description: '<b>Toolbox</b> is an incident and internal-reporting platform for Facens and Newton, built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'Users document occurrences with descriptions and photos, assign responsible teams and retrieve event details through QR codes. The product integrates with both universities’ authentication systems.',
  outcome: 'The platform continued to support internal workflows at Facens and Newton after delivery.',
  imageUrls: [
    'assets/imgs/projects/toolbox/toolbox1.webp',
    'assets/imgs/projects/toolbox/toolbox2.webp',
    'assets/imgs/projects/toolbox/toolbox3.webp',
    'assets/imgs/projects/toolbox/toolbox4.webp',
    'assets/imgs/projects/toolbox/toolbox5.webp',
    'assets/imgs/projects/toolbox/toolbox6.webp',
    'assets/imgs/projects/toolbox/toolbox7.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.toolbox' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/toolbox-facens/id1533872963' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
