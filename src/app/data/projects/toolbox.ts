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
  coverImage: 'assets/imgs/projects/toolbox/toolbox2.PNG',
  developmentDate: '21/01/2021 ~ 30/10/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Facens/Newton university authentication system</b> using <b>NgZorro</b>, <b>PrimeNg</b> and <b>Boostrap</b>.\n\n' +
    'App developed to <b>control events and internal reports</b> of your company, <b>sending photos</b>, <b>describing events</b> and <b>adding responsible teams to solve the problem</b>.\n\n' +
    'With event system and <b>QRCode integration</b> showing information about the scanned occurrence.',
  outcome: 'The result was very good and even today it is widely used within Facens and Newton.',
  imageUrls: [
    'assets/imgs/projects/toolbox/toolbox1.PNG',
    'assets/imgs/projects/toolbox/toolbox2.PNG',
    'assets/imgs/projects/toolbox/toolbox3.PNG',
    'assets/imgs/projects/toolbox/toolbox4.png',
    'assets/imgs/projects/toolbox/toolbox5.png',
    'assets/imgs/projects/toolbox/toolbox6.png',
    'assets/imgs/projects/toolbox/toolbox7.png',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.toolbox' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/toolbox-facens/id1533872963' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
