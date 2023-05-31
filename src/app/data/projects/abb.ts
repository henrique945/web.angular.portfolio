//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const abb: ProjectInterface = {
  isActive: true,
  id: 'abb',
  name: 'ABB',
  coverImage: 'assets/imgs/projects/abb/abb1.PNG',
  developmentDate: '06/12/2021 ~ 17/01/2022',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and accessing <b>AWS S3 with AWS Cloud (Aws Lambda + S3)</b>.\n\n' +
    'Site to download the most recent <b>Virtual Reality training</b> from the <b>multinational company ABB</b> that works in energy and automation technologies.\n\n' +
    'It is possible to switch between 3 different languages (EN, ES, PT) and download the apk of approximately <b>1gb</b> to be played on the VR glasses using the <b>AWS S3</b> file container.\n',
  outcome: 'Despite being simple, direct and functional, the site was widely used by ABB\'s internal team.',
  imageUrls: [
    'assets/imgs/projects/abb/abb1.PNG',
    'assets/imgs/projects/abb/abb2.PNG',
    'assets/imgs/projects/abb/abb3.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://www.abb-download.ligafacens.com/' },
    { title: 'ABB Global', link: 'https://global.abb/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
