//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const usina: ProjectInterface = {
  isActive: true,
  id: 'usina',
  name: 'Usina Cultural',
  coverImage: 'assets/imgs/projects/usina/usina3.PNG',
  developmentDate: '21/01/2021 ~ 30/10/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and <b>integrated with Google, Apple and Facebook Login</b>.\n\n' +
    'Developed for the <b>city hall of Sorocaba - São Paulo, Brazil</b> and its event space, "<b>Cultural Plant</b>".\n\n' +
    'The platform promotes <b>activities</b>, <b>events</b> and <b>artists</b> and focuses on sharing <b>culture</b>, <b>entrepreneurship</b> and <b>sustainability</b>.\n\n',
  outcome: 'Beautiful and intuitive website with excellent results, being used a lot by the city\'s pollution.',
  imageUrls: [
    'assets/imgs/projects/usina/usina1.PNG',
    'assets/imgs/projects/usina/usina2.PNG',
    'assets/imgs/projects/usina/usina3.PNG',
    'assets/imgs/projects/usina/usina4.PNG',
    'assets/imgs/projects/usina/usina5.PNG',
    'assets/imgs/projects/usina/usina6.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://usinacultural.facens.br/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
