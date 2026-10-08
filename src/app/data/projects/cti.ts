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
  coverImage: 'assets/imgs/projects/cti/cti1.thumb.webp',
  developmentDate: '29/03/2020 ~ 09/11/2020',
  description: 'A responsive <b>Angular</b> website hosted with <b>Firebase</b> for a Pilates and aesthetics clinic.',
  outcome: 'Delivered on a short schedule as the clinic’s online presentation website.',
  imageUrls: [
    'assets/imgs/projects/cti/cti1.webp',
    'assets/imgs/projects/cti/cti2.webp',
    'assets/imgs/projects/cti/cti3.webp',
  ],
  links: [
    { title: 'Site', link: 'https://clinicamovimento.firebaseapp.com/' },
  ],
  tags: [ProjectTagsEnum.WEB],
  techs: [TechEnum.ANGULAR],
  orientation: OrientationEnum.HORIZONTAL,
};
