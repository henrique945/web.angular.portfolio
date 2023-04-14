//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const fablab: ProjectInterface = {
  name: 'Fablab',
  coverImage: 'assets/imgs/projects/fablab/fablab1.PNG',
  developmentDate: '15/10/2019 ~ 15/10/2020',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3) for tablet</b>.\n' +
    'A social network that helps the <b>worldwide Fablab community</b> to share knowledge and projects.\n' +
    'A social network with features such as user achievements, machine training, project creation, likes and comments interactions and more...\n',
  outcome: 'Was completed and was in the test phase but Fablab did not continue the project.',
  imageUrls: [
    'assets/imgs/projects/fablab/fablab1.PNG',
    'assets/imgs/projects/fablab/fablab2.PNG',
    'assets/imgs/projects/fablab/fablab3.PNG',
    'assets/imgs/projects/fablab/fablab4.PNG',
    'assets/imgs/projects/fablab/fablab5.PNG',
    'assets/imgs/projects/fablab/fablab6.PNG',
    'assets/imgs/projects/fablab/fablab7.PNG',
  ],
  links: [
    { title: 'Fablab', link: 'https://fablab.studio/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};