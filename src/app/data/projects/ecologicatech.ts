//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const ecologicatech: ProjectInterface = {
  isActive: true,
  id: 'ecologicatech',
  name: 'Ecologicatech',
  coverImage: 'assets/imgs/projects/ecologicatech/eco9.PNG',
  developmentDate: '13/03/2023 ~ 14/04/2023',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Google Maps API</b>.\n\n' +
    '<b>Ecologicatech</b> was developed for <b>Aguama</b>, environmental management and marketing company, the project focused on the creation of events for companies and on replies to these events forms, with this data we can calculate the distance between locations and transport (using <b>Google Maps API</b>). And verify the amount of <b>CO2 emitted</b> on the planet. Thus knowing how many trees will be needed to combat the <b>CO2 emitted</b>.\n',
  outcome: 'Project was used in real events, being the first one in a conference called "MMA Impact Brasil" (Mobile Marketing Association) in São Paulo - Brazil with several data obtained.',
  imageUrls: [
    'assets/imgs/projects/ecologicatech/eco1.PNG',
    'assets/imgs/projects/ecologicatech/eco2.PNG',
    'assets/imgs/projects/ecologicatech/eco3.PNG',
    'assets/imgs/projects/ecologicatech/eco4.PNG',
    'assets/imgs/projects/ecologicatech/eco5.PNG',
    'assets/imgs/projects/ecologicatech/eco8.PNG',
    'assets/imgs/projects/ecologicatech/eco9.PNG',
    'assets/imgs/projects/ecologicatech/eco6.PNG',
    'assets/imgs/projects/ecologicatech/eco7.PNG',
  ],
  links: [
    { title: 'Control Panel', link: 'https://backoffice.ecologicatech.ligafacens.com/' },
    { title: 'Aguama', link: 'https://www.aguama.com.br/' },
    { title: 'MMA', link: 'https://www.mmaglobal.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
