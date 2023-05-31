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
  coverImage: 'assets/imgs/projects/yesno/yesno6.jpeg',
  developmentDate: '09/03/2020 ~ 24/04/2020',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript) </b>acessing the <b>phone\'s contact list</b>.\n\n' +
    'It is possible to <b>create questions</b> by attaching images, request opinions from your <b>contact list</b>, <b>create groups</b> with friends and follow the <b>graphs</b> and <b>statistics</b> of the created questions.\n\n' +
    'Yesno, a way to give opinions and collect opinions about your day-to-day questions.\n',
  outcome: 'It had little adherence and was rarely used.',
  imageUrls: [
    'assets/imgs/projects/yesno/yesno1.png',
    'assets/imgs/projects/yesno/yesno2.png',
    'assets/imgs/projects/yesno/yesno3.jpeg',
    'assets/imgs/projects/yesno/yesno4.jpeg',
    'assets/imgs/projects/yesno/yesno5.jpeg',
    'assets/imgs/projects/yesno/yesno6.jpeg',
    'assets/imgs/projects/yesno/yesno7.jpeg',
    'assets/imgs/projects/yesno/yesno8.jpeg',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=liga.app.yesno' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
};
