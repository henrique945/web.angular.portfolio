//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const terrex: ProjectInterface = {
  isActive: true,
  id: 'terrex',
  name: 'Terrex',
  coverImage: 'assets/imgs/projects/terrex/terrex2.thumb.webp',
  developmentDate: '04/07/2022 ~ 17/10/2022',
  description: '<b>Terrex</b> is a crop-planning app built for Tecnomyl with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>. Farmers define plots by GPS or by drawing on a map, then manage planting cycles for each area.\n\n' +
    'Plugfield devices provide soil measurements, Foreca supplies weather data, and <b>EventBridge</b> schedules crop-care notifications.',
  outcome: 'The product was completed, but the client chose to postpone its launch.',
  imageUrls: [
    'assets/imgs/projects/terrex/terrex1.webp',
    'assets/imgs/projects/terrex/terrex2.webp',
    'assets/imgs/projects/terrex/terrex3.webp',
    'assets/imgs/projects/terrex/terrex4.webp',
    'assets/imgs/projects/terrex/terrex5.webp',
    'assets/imgs/projects/terrex/terrex6.webp',
    'assets/imgs/projects/terrex/terrex7.webp',
    'assets/imgs/projects/terrex/terrex8.webp',
    'assets/imgs/projects/terrex/terrex9.webp',
  ],
  links: [
    { title: 'Plugfield', link: 'https://portal.plugfield.com.br/' },
    { title: 'Foreca', link: 'https://www.foreca.com/' },
    { title: 'Tecnomyl', link: 'https://tecnomyl.com.br/quem-somos/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
