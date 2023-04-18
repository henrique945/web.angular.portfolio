//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const mundoFacens: ProjectInterface = {
  isActive: true,
  id: 'mundoFacens',
  name: 'Mundo Facens',
  coverImage: 'assets/imgs/projects/mundo-facens/mundo5.PNG',
  developmentDate: '20/10/2022 ~ 25/01/2023',
  description: 'Developed in <b>(Typescript JSX)</b> as a <b>PWA</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>.\n\n' +
    'Project developed for <b>Facens university</b> for the engineering week.\n\n' +
    'Students can answer <b>questions</b>, <b>videos</b> and <b>mini-games</b> to increase their score in their final grade.\n\n' +
    'The project aims to develop students and expand their knowledge and curiosities in exchange for a better grade.\n\n',
  outcome: 'Approximately 4k university students used and participated in the activity.',
  imageUrls: [
    'assets/imgs/projects/mundo-facens/mundo1.PNG',
    'assets/imgs/projects/mundo-facens/mundo2.PNG',
    'assets/imgs/projects/mundo-facens/mundo3.PNG',
    'assets/imgs/projects/mundo-facens/mundo4.PNG',
    'assets/imgs/projects/mundo-facens/mundo5.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://mundo.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.REACT, TechEnum.PWA, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  position: 19,
};
