//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const assetHub: ProjectInterface = {
  isActive: true,
  id: 'assetHub',
  name: 'Asset Hub',
  coverImage: 'assets/imgs/projects/hub/hub1.PNG',
  developmentDate: '08/08/2022 ~ 04/12/2022',
  description: 'Developed in <b>React (Typescript JSX)</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Facens university authentication system</b>.\n\n' +
    'In the <b>Asset Hub</b>, the sectors of the company <b>Facens</b> can create and share their <b>projects</b> and <b>resources</b> among their users, all <b>filtered by tags and smart searches</b>.\n\n' +
    'Tightly integrated with <b>AWS Storage (S3)</b>, where users can <b>save 3d assets, audios, photos and videos</b>, facilitating their reuse in other projects.\n\n' +
    'The <b>3d models can be viewed within the website</b>, without having to download them.\n',
  outcome: 'Project widely used internally and with positive feedback regarding the ease and practicality of searching for resources.',
  imageUrls: [
    'assets/imgs/projects/hub/hub1.PNG',
    'assets/imgs/projects/hub/hub2.PNG',
    'assets/imgs/projects/hub/hub3.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://acontece-facens.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.REACT, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
