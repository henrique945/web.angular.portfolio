//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const iquot: ProjectInterface = {
  id: 'iquot',
  name: 'Iquot',
  coverImage: 'assets/imgs/projects/iquot/iquot7.PNG',
  developmentDate: '17/01/2022 ~ 14/03/2022',
  description: 'Developed in <b>NestJs (NodeJs + PostgresQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Aws SNS for SMS messages</b> and <b>Google Maps API (Geocoding)</b>.\n\n' +
    'The iquot system offers a new way to request a quote for materials for your work in a practical and quick way.\n\n' +
    'You will receive quotations from stores and manufacturers of building materials for you to compare the best prices and save on your work. We use <b>Google to calculate the users\' coordinates and the distance between the seller and the final buyer</b>.\n\n' +
    'Budgets have an expiration date and are closed automatically by the <b>Aws EventBridge routine</b> that runs every hour on a daily basis.\n\n' +
    'We also use another <b>routine to notify users</b> when a new quote is added. And, when the budget is accepted, everyone involved receives an <b>SMS notification on their mobile (Aws SNS)</b>.\n',
  outcome: 'Despite being interesting and the various technologies used, the system did not have great adherence to the public.',
  imageUrls: [
    'assets/imgs/projects/iquot/iquot1.PNG',
    'assets/imgs/projects/iquot/iquot2.png',
    'assets/imgs/projects/iquot/iquot3.png',
    'assets/imgs/projects/iquot/iquot4.png',
    'assets/imgs/projects/iquot/iquot5.png',
    'assets/imgs/projects/iquot/iquot6.PNG',
    'assets/imgs/projects/iquot/iquot7.PNG',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.android.iquot' },
    { title: 'Control Panel', link: 'https://backoffice-dev.iquot.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.APIS],
  techs: [TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  position: 5,
};
