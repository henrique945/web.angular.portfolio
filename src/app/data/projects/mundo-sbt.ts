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
  coverImage: 'assets/imgs/projects/mundo-sbt/sbt3.thumb.webp',
  developmentDate: '10/03/2023 ~ 22/03/2023',
  description: 'An <b>Angular</b> account-support website for the Mundo SBT RPG, backed by serverless JavaScript functions on <b>AWS</b> and integrated with <b>Microsoft PlayFab</b>.\n\n' +
    'The flow handles first-access email confirmation and password recovery for players of the SBT Games title.',
  outcome: 'The website was delivered, while its public rollout remained dependent on completion of the game.',
  imageUrls: [
    'assets/imgs/projects/mundo-sbt/sbt1.webp',
    'assets/imgs/projects/mundo-sbt/sbt2.webp',
    'assets/imgs/projects/mundo-sbt/sbt3.webp',
  ],
  links: [
    { title: 'Site', link: 'https://sbtmmo.ligafacens.com/' },
    { title: 'SBT Games', link: 'https://www.sbt.com.br/variedades/sbt-games' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS, ProjectTagsEnum.MOBILE],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
