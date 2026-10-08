//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ayrtonSenna: ProjectInterface = {
  isActive: true,
  id: 'ayrtonSenna',
  name: 'Ayrton Senna',
  coverImage: 'assets/imgs/projects/ayrton-senna/ias3.thumb.webp',
  developmentDate: '07/11/2021 ~ 17/12/2021',
  description: 'A guided personal-development app for the <b>Ayrton Senna Institute</b>, built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>.\n\n' +
    'Young people assemble visual journeys around self-knowledge, planning and skill development. Deep links support social sharing, while <b>NSFW.js</b> checks user-submitted images for sensitive content.',
  outcome: 'The app reached more than 1,000 Play Store downloads before the institute stopped publishing updates.',
  imageUrls: [
    'assets/imgs/projects/ayrton-senna/ias1.webp',
    'assets/imgs/projects/ayrton-senna/ias2.webp',
    'assets/imgs/projects/ayrton-senna/ias3.webp',
    'assets/imgs/projects/ayrton-senna/ias4.webp',
    'assets/imgs/projects/ayrton-senna/ias5.webp',
    'assets/imgs/projects/ayrton-senna/ias6.webp',
    'assets/imgs/projects/ayrton-senna/ias7.webp',
    'assets/imgs/projects/ayrton-senna/ias8.webp',
    'assets/imgs/projects/ayrton-senna/ias9.webp',
    'assets/imgs/projects/ayrton-senna/ias10.webp',
    'assets/imgs/projects/ayrton-senna/ias11.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.motivacao.ias' },
    { title: 'Ayrton Senna', link: 'https://institutoayrtonsenna.org.br/' },
    { title: 'NSFWjs', link: 'https://www.npmjs.com/package/nsfwjs' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
