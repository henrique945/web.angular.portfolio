//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const cti: ProjectInterface = {
  isActive: true,
  id: 'cti',
  name: 'Movimento CTI',
  coverImage: 'assets/imgs/projects/cti/cti1.PNG',
  developmentDate: '29/03/2020 ~ 09/11/2020',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> with <b>Firebase</b>.\n\n' +
    'Display site for a Pilates and aesthetics clinic.\n',
  outcome: 'Fast development website with the iam to show the image of the clinic.',
  imageUrls: [
    'assets/imgs/projects/cti/cti1.PNG',
    'assets/imgs/projects/cti/cti2.PNG',
    'assets/imgs/projects/cti/cti3.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://clinicamovimento.firebaseapp.com/' },
  ],
  tags: [ProjectTagsEnum.WEB],
  techs: [TechEnum.ANGULAR],
  orientation: OrientationEnum.HORIZONTAL,
  position: 22,
};
