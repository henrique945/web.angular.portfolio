//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ncursos: ProjectInterface = {
  isActive: true,
  id: 'ncursos',
  name: 'NCursos',
  coverImage: 'assets/imgs/projects/ncursos/ncursos1.PNG',
  developmentDate: '16/08/2021 ~ 27/05/2022',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Facens university authentication system</b> and <b>Hotjar Analytics</b>.\n\n' +
    '<b>NCursos</b> is a course platform focused on college students with several features for learning and creating content, like <b>classes</b> and <b>tracks</b>.\n',
  outcome: 'The platform had average results, selling some of the registered courses and raising students.',
  imageUrls: [
    'assets/imgs/projects/ncursos/ncursos1.PNG',
    'assets/imgs/projects/ncursos/ncursos2.PNG',
    'assets/imgs/projects/ncursos/ncursos3.PNG',
    'assets/imgs/projects/ncursos/ncursos4.PNG',
    'assets/imgs/projects/ncursos/ncursos5.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://www.ncursosedu.com.br/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
