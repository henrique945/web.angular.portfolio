//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const terrex: ProjectInterface = {
  isActive: true,
  id: 'terrex',
  name: 'Terrex',
  coverImage: 'assets/imgs/projects/terrex/terrex2.PNG',
  developmentDate: '04/07/2022 ~ 17/10/2022',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>plugfield</b> and <b>foreca</b>.\n\n' +
    'Project where a <b>farmer delimits his land by GPS</b> or drawing on a map and chooses the <b>planting cycles</b> that will be planted, developed for <b>Tecnomyl (Brasil Distribuidora de Produtos Agrícolas Ltda)</b>.\n\n' +
    'Their plots are equipped with <b>Plugfield robots</b> that measure <b>toxins</b> and <b>soil water temperature/density</b> together with <b>foreca weather and cloud api</b>.\n\n' +
    'In addition to a wonderful interface and several functionalities about your crop cycle and terrain, there is a <b>routine in the Aws (Event Bridge)</b> to periodically send notifications to the user about instructions necessary for your plantation to remain healthy.\n',
  outcome: 'Despite the different theme and excellent development of the project, the client decided to postpone its launch.',
  imageUrls: [
    'assets/imgs/projects/terrex/terrex1.png',
    'assets/imgs/projects/terrex/terrex2.PNG',
    'assets/imgs/projects/terrex/terrex3.PNG',
    'assets/imgs/projects/terrex/terrex4.PNG',
    'assets/imgs/projects/terrex/terrex5.PNG',
    'assets/imgs/projects/terrex/terrex6.PNG',
    'assets/imgs/projects/terrex/terrex7.PNG',
    'assets/imgs/projects/terrex/terrex8.PNG',
    'assets/imgs/projects/terrex/terrex9.PNG',
  ],
  links: [
    { title: 'Plugfield', link: 'https://portal.plugfield.com.br/' },
    { title: 'Foreca', link: 'https://www.foreca.com/' },
    { title: 'Tecnomyl', link: 'https://tecnomyl.com.br/quem-somos/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
};
