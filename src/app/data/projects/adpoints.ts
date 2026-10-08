//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const adpoints: ProjectInterface = {
  isActive: true,
  id: 'adpoints',
  name: 'Ad Points',
  coverImage: 'assets/imgs/projects/adpoints/adpoints1.thumb.webp',
  developmentDate: '02/08/2019 ~ 18/10/2021',
  description: '<b>Ad Points</b> combines an <b>Ionic/Angular</b> mobile experience with <b>NestJS, PostgreSQL</b> and <b>AWS</b>. Companies can publish survey campaigns and turn responses into leads, while participants earn points, compete in rankings and redeem rewards.\n\n' +
    'An administrative panel presents campaign responses and audience breakdowns by age, gender and location.',
  outcome: 'The product was completed, but limited promotion resulted in modest user engagement.',
  imageUrls: [
    'assets/imgs/projects/adpoints/adpoints1.webp',
    'assets/imgs/projects/adpoints/adpoints2.webp',
    'assets/imgs/projects/adpoints/adpoints3.webp',
    'assets/imgs/projects/adpoints/adpoints4.webp',
    'assets/imgs/projects/adpoints/adpoints5.webp',
    'assets/imgs/projects/adpoints/adpoints6.webp',
    'assets/imgs/projects/adpoints/adpoints7.webp',
    'assets/imgs/projects/adpoints/adpoints8.webp',
    'assets/imgs/projects/adpoints/adpoints9.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.adpoints' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/adpoints/id1479092460' },
    { title: 'Control Panel', link: 'https://backoffice.adpoints.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
