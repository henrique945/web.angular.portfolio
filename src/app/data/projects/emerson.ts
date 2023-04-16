//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const emerson: ProjectInterface = {
  isActive: true,
  id: 'emerson',
  name: 'Emerson',
  coverImage: 'assets/imgs/projects/emerson/emerson2.PNG',
  developmentDate: '20/07/2020 ~ 17/08/2020',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>Bootstrap Template</b>.\n\n' +
    'Project developed to store <b>more than a thousand products</b> from the catalog split by category of the <b>multinational Emerson Electric Co.</b>, a global technology, software and engineering power.\n\n' +
    'A <b>script</b> was created separately from the system to automatically upload all the products and their <b>files (pdfs and images)</b>.\n',
  outcome: 'After registering all the products in the system, the Emerson customer did not use the system much.',
  imageUrls: [
    'assets/imgs/projects/emerson/emerson1.PNG',
    'assets/imgs/projects/emerson/emerson2.PNG',
  ],
  links: [
    { title: 'Emerson', link: 'https://www.emerson.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  position: 9,
};
