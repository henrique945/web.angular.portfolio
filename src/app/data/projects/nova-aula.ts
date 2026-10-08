//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const novaAula: ProjectInterface = {
  isActive: true,
  id: 'novaAula',
  name: 'Nova Aula',
  coverImage: 'assets/imgs/projects/nova-aula/novaaula4.thumb.webp',
  developmentDate: '27/05/2020 ~ 23/11/2020',
  description: '<b>Nova Aula</b> is an education PWA built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>, with Ng Zorro for its administration interface.\n\n' +
    'The platform includes courses and classes, a community forum, chat, questions, notes and class-progress tracking.',
  outcome: 'The product was completed, but production adoption remained limited.',
  imageUrls: [
    'assets/imgs/projects/nova-aula/novaaula1.webp',
    'assets/imgs/projects/nova-aula/novaaula2.webp',
    'assets/imgs/projects/nova-aula/novaaula3.webp',
    'assets/imgs/projects/nova-aula/novaaula4.webp',
    'assets/imgs/projects/nova-aula/novaaula5.webp',
    'assets/imgs/projects/nova-aula/novaaula6.webp',
    'assets/imgs/projects/nova-aula/novaaula7.webp',
  ],
  links: [
    { title: 'Site', link: 'https://www.novaaula.com/' },
    { title: 'Control Panel', link: 'https://backoffice.novaaula.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.PWA],
  orientation: OrientationEnum.HORIZONTAL,
};
