//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const learnbox: ProjectInterface = {
  id: 'learnbox',
  name: 'Learnbox',
  coverImage: 'assets/imgs/projects/learnbox/learnbox5.PNG',
  developmentDate: '27/04/2020 ~ 29/10/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>.\n' +
    'Create and update your collections, Learnbox is a social network for collectors, with interactions, comments and favorites.\n' +
    '<b>Learn Box</b> is here to showcase your <b>best collections</b> to your friends and the world!\n' +
    'After all, your collections have a lot of meaning! How about showing this meaning to everyone?\n',
  outcome: 'The development was complete but the application is for a very specific group of people and has not been used much.',
  imageUrls: [
    'assets/imgs/projects/learnbox/learnbox1.PNG',
    'assets/imgs/projects/learnbox/learnbox2.PNG',
    'assets/imgs/projects/learnbox/learnbox3.PNG',
    'assets/imgs/projects/learnbox/learnbox4.PNG',
    'assets/imgs/projects/learnbox/learnbox5.PNG',
    'assets/imgs/projects/learnbox/learnbox6.PNG',
    'assets/imgs/projects/learnbox/learnbox7.PNG',
    'assets/imgs/projects/learnbox/learnbox8.PNG',
    'assets/imgs/projects/learnbox/learnbox9.PNG',
    'assets/imgs/projects/learnbox/learnbox10.PNG',
    'assets/imgs/projects/learnbox/learnbox11.png',
    'assets/imgs/projects/learnbox/learnbox12.png',
    'assets/imgs/projects/learnbox/learnbox13.png',
    'assets/imgs/projects/learnbox/learnbox14.png',
    'assets/imgs/projects/learnbox/learnbox15.png',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.learnbox' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  position: 11,
};
