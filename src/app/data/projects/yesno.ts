//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const yesno: ProjectInterface = {
  isActive: true,
  id: 'yesno',
  name: 'YesNo',
  coverImage: 'assets/imgs/projects/yesno/yesno6.thumb.webp',
  developmentDate: '09/03/2020 ~ 24/04/2020',
  description: '<b>YesNo</b> is an <b>Ionic/Angular</b> polling app that connects with a user’s phone contacts.\n\n' +
    'Users can create image-based questions, request opinions from contacts, organize friends into groups and review response charts and statistics.',
  outcome: 'The app was released, but adoption and recurring usage remained low.',
  imageUrls: [
    'assets/imgs/projects/yesno/yesno1.webp',
    'assets/imgs/projects/yesno/yesno2.webp',
    'assets/imgs/projects/yesno/yesno3.webp',
    'assets/imgs/projects/yesno/yesno4.webp',
    'assets/imgs/projects/yesno/yesno5.webp',
    'assets/imgs/projects/yesno/yesno6.webp',
    'assets/imgs/projects/yesno/yesno7.webp',
    'assets/imgs/projects/yesno/yesno8.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.yesno' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
};
