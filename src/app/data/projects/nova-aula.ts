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
  coverImage: 'assets/imgs/projects/nova-aula/novaaula4.PNG',
  developmentDate: '27/05/2020 ~ 23/11/2020',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> as a <b>PWA</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and <b>NgZorro</b>.\n\n' +
    'The project is a <b>teaching platform</b>, with courses, classes and a forum for users to exchange knowledge.\n\n' +
    'It has features such as questions, notes and class progress.\n',
  outcome: 'Completed but not used much in production.',
  imageUrls: [
    'assets/imgs/projects/nova-aula/novaaula1.PNG',
    'assets/imgs/projects/nova-aula/novaaula2.PNG',
    'assets/imgs/projects/nova-aula/novaaula3.PNG',
    'assets/imgs/projects/nova-aula/novaaula4.PNG',
    'assets/imgs/projects/nova-aula/novaaula5.PNG',
    'assets/imgs/projects/nova-aula/novaaula6.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://www.novaaula.com/' },
    { title: 'Control Panel', link: 'https://backoffice.novaaula.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.PWA],
  orientation: OrientationEnum.HORIZONTAL,
  position: 11,
};
