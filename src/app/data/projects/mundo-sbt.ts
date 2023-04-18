//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const mundoSbt: ProjectInterface = {
  isActive: true,
  id: 'mundoSbt',
  name: 'Mundo SBT',
  coverImage: 'assets/imgs/projects/mundo-sbt/sbt3.png',
  developmentDate: '10/03/2023 ~ 22/03/2023',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>Javascript function API</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Microsoft PlayFab</b>.\n\n' +
    'A website developed for <b>SBT Games</b>, a sector of the SBT TV station that talks about game news.\n\n' +
    'Site for <b>password recovery</b> and <b>user email confirmation</b> on first access to the <b>Mundo SBT</b> RPG game running with <b>Microsoft PlayFab</b>.\n\n',
  outcome: 'Site awaiting end of game development.',
  imageUrls: [
    'assets/imgs/projects/mundo-sbt/sbt1.PNG',
    'assets/imgs/projects/mundo-sbt/sbt2.PNG',
    'assets/imgs/projects/mundo-sbt/sbt3.png',
  ],
  links: [
    { title: 'Site', link: 'https://sbtmmo.ligafacens.com/' },
    { title: 'SBT Games', link: 'https://www.sbt.com.br/variedades/sbt-games' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS, ProjectTagsEnum.MOBILE],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  position: 20,
};
