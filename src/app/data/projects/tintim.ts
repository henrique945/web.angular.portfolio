//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const tintim: ProjectInterface = {
  isActive: true,
  id: 'tintim',
  name: 'Tintim',
  coverImage: 'assets/imgs/projects/tintim/tintim9.PNG',
  developmentDate: '17/09/2022 ~ 28/04/2023',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>, integrated with <b>company authentication system</b> and <b>customized by company themes</b>.\n\n' +
    '<b>Tintim app</b> is a fun and immersive mobile app that offers users the opportunity to <b>complete missions</b> and answer <b>quizzes to earn points</b>.\n\n' +
    'Each <b>customized company</b> has their products, missions and awars.\n\n' +
    'It was developed a <b>template</b> to absorb several different <b>companies, their different philoshophies, rules and themes</b>.',
  outcome: 'There are already 4 companies (Summit, CEMIG, Facens and Newton) and more than a 1,000 employees using it.',
  imageUrls: [
    'assets/imgs/projects/tintim/tintim1.PNG',
    'assets/imgs/projects/tintim/tintim2.png',
    'assets/imgs/projects/tintim/tintim3.png',
    'assets/imgs/projects/tintim/tintim4.PNG',
    'assets/imgs/projects/tintim/tintim5.PNG',
    'assets/imgs/projects/tintim/tintim6.PNG',
    'assets/imgs/projects/tintim/tintim7.PNG',
    'assets/imgs/projects/tintim/tintim8.PNG',
    'assets/imgs/projects/tintim/tintim9.PNG',
    'assets/imgs/projects/tintim/tintim10.PNG',
    'assets/imgs/projects/tintim/tintim11.PNG',
    'assets/imgs/projects/tintim/tintim12.PNG',
    'assets/imgs/projects/tintim/tintim13.png',
    'assets/imgs/projects/tintim/tintim14.png',
    'assets/imgs/projects/tintim/tintim15.png',
    'assets/imgs/projects/tintim/tintim16.png',
    'assets/imgs/projects/tintim/tintim17.png',
  ],
  links: [
    { title: 'Play Store Summit', link: 'https://play.google.com/store/apps/details?id=com.liga.tintim.summit' },
    { title: 'Play Store CEMIG', link: 'https://play.google.com/store/apps/details?id=com.liga.tintim.cemigrun' },
    { title: 'Play Store Newton', link: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.newton' },
    { title: 'Play Store Facens', link: 'https://play.google.com/store/apps/details?id=com.liga.app.tintim.facens' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
