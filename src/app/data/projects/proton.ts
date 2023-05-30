//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const proton: ProjectInterface = {
  isActive: true,
  id: 'proton',
  name: 'Proton',
  coverImage: 'assets/imgs/projects/proton/proton5.PNG',
  developmentDate: '03/08/2020 ~ 05/07/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> as an <b>App</b> and a <b>PWA</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Apple and Facebook login</b> and with <b>support of RSS Feed</b>.\n\n' +
    'App developed for the users to be able to navigate between their <b>news focused on the financial market</b> at the request of the client <b>Carol Paiffer (Shark Tank) - ATOM S/A</b>.\n\n' +
    'The news was <b>dynamically updated by the Aws routine (Event Bridge)</b> based on <b>RSS feeds</b> from notifiers such as <b>BBC</b>, <b>Globo</b> and <b>Uol</b>.\n\n' +
    'The user could read, comment, like and save the news for later.\n',
  outcome: 'The app did not have much publicity and public adherence.',
  imageUrls: [
    'assets/imgs/projects/proton/proton1.png',
    'assets/imgs/projects/proton/proton2.png',
    'assets/imgs/projects/proton/proton3.PNG',
    'assets/imgs/projects/proton/proton4.PNG',
    'assets/imgs/projects/proton/proton5.PNG',
    'assets/imgs/projects/proton/proton6.PNG',
    'assets/imgs/projects/proton/proton7.PNG',
  ],
  links: [
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/proton/id1558126352' },
    { title: 'Atom', link: 'https://atomeducacional.com.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS, TechEnum.PWA],
  orientation: OrientationEnum.VERTICAL,
  position: 24,
};
