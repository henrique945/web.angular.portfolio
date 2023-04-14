//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ayrtonSenna: ProjectInterface = {
  name: 'Ayrton Senna',
  coverImage: 'assets/imgs/projects/ayrton-senna/ias3.PNG',
  developmentDate: '',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Deeplink</b> and <b>nsfwJs for sensitive content detection</b>.\n' +
    'Creating trips dynamically by blocking, the application aims to provide a light and hands-on journey that offers young people tools for: self-knowledge, planning, and skills development sponsored by the <b>Ayrton Senna Institute</b>.\n' +
    'In addition to being able to share your trips on other social networks with Deeplink and check sensitive content.\n',
  outcome: 'The app reached more than a thousand downloads on Play Store and there are no more updates from the institute.',
  imageUrls: [
    'assets/imgs/projects/ayrton-senna/ias1.PNG',
    'assets/imgs/projects/ayrton-senna/ias2.PNG',
    'assets/imgs/projects/ayrton-senna/ias3.PNG',
    'assets/imgs/projects/ayrton-senna/ias4.PNG',
    'assets/imgs/projects/ayrton-senna/ias5.PNG',
    'assets/imgs/projects/ayrton-senna/ias6.PNG',
    'assets/imgs/projects/ayrton-senna/ias7.PNG',
    'assets/imgs/projects/ayrton-senna/ias8.PNG',
    'assets/imgs/projects/ayrton-senna/ias9.PNG',
    'assets/imgs/projects/ayrton-senna/ias10.PNG',
    'assets/imgs/projects/ayrton-senna/ias11.PNG',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.motivacao.ias' },
    { title: 'Ayrton Senna', link: 'https://institutoayrtonsenna.org.br/' },
    { title: 'NSFWjs', link: 'https://www.npmjs.com/package/nsfwjs' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  position: 2,
};
