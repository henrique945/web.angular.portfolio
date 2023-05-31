//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const facens: ProjectInterface = {
  isActive: true,
  id: 'facens',
  name: 'Facens',
  coverImage: 'assets/imgs/projects/facens/facens1.png',
  developmentDate: '15/10/2019 ~ 15/10/2020',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Facens autentication system</b>.\n\n' +
    'With the <b>FACENS app</b> you can view your grades, absences and class schedules.\n\n' +
    'In addition, you will be able to interact with <b>FACENS</b> events using a single application and access your <b>student ID card</b>.\n',
  outcome: 'The app was a hit with over 10,000 downloads and a 4.8/5 on the Play Store, everyone in college likes its practicality.',
  imageUrls: [
    'assets/imgs/projects/facens/facens1.png',
    'assets/imgs/projects/facens/facens2.png',
    'assets/imgs/projects/facens/facens3.png',
    'assets/imgs/projects/facens/facens4.png',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.facens' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/facens/id1217538800' },
    { title: 'Facens', link: 'https://facens.br/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
