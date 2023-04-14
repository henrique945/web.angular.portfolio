//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const adpoints: ProjectInterface = {
  name: 'Ad Points',
  coverImage: 'assets/imgs/projects/adpoints/adpoints1.png',
  developmentDate: '02/08/2019 ~ 18/10/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>.\n' +
    'You can create a campaign with questions related to your business and generate leads from the responses obtained.\n' +
    'As a user, your goal is to complete as many campaigns as possible, stand out in the user rankings and win gifts.\n' +
    'In the <b>administrative panel, graphs and reports</b> are displayed according to user information (age, gender, location) and their responses (by campaign).\n' +
    '\n' +
    'With Ad Points you can receive surveys, evaluate and help the company and in the end you can end up winning freebies for it. Cool, huh?\n' +
    'Be part of this community and come win your toast too!\n',
  outcome: 'Project was completed without problems but there was not much engagement and dissemination of it.',
  imageUrls: [
    'assets/imgs/projects/adpoints/adpoints1.png',
    'assets/imgs/projects/adpoints/adpoints2.png',
    'assets/imgs/projects/adpoints/adpoints3.png',
    'assets/imgs/projects/adpoints/adpoints4.png',
    'assets/imgs/projects/adpoints/adpoints5.PNG',
    'assets/imgs/projects/adpoints/adpoints6.PNG',
    'assets/imgs/projects/adpoints/adpoints7.PNG',
    'assets/imgs/projects/adpoints/adpoints8.PNG',
    'assets/imgs/projects/adpoints/adpoints9.PNG',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.adpoints' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/adpoints/id1479092460' },
    { title: 'Control Panel', link: 'https://backoffice.adpoints.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  position: 1,
};
