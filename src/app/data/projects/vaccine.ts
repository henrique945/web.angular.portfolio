//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const vaccine: ProjectInterface = {
  isActive: true,
  id: 'vaccine',
  name: 'Vacina Votorantim',
  coverImage: 'assets/imgs/projects/vaccine/vaccine4.PNG',
  developmentDate: '24/03/2021 ~ 20/05/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> as a <b>PWA</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b>.\n\n' +
    '<b>PWA</b> developed for the city of <b>Votorantim - SP, Brazil to schedule the covid vaccine</b>.\n\n' +
    'Where the <b>administrative panel</b> controlled the information and batches of the vaccine, <b>helping to schedule and organize the vaccine application</b>.\n\n' +
    'The <b>Database</b> accumulated more than <b>100gb of more than 65k users information</b> (car license, user photo and national ID card).\n',
  outcome: 'The software was widely and extensively used, and served more than half of the city\'s population (more than 65k inhabitants).',
  imageUrls: [
    'assets/imgs/projects/vaccine/vaccine1.PNG',
    'assets/imgs/projects/vaccine/vaccine2.PNG',
    'assets/imgs/projects/vaccine/vaccine3.PNG',
    'assets/imgs/projects/vaccine/vaccine4.PNG',
    'assets/imgs/projects/vaccine/vaccine5.PNG',
    'assets/imgs/projects/vaccine/vaccine6.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://site.vacina-votorantim.ligafacens.com/' },
    { title: 'Newspaper', link: 'https://www.votorantim.sp.gov.br/portal/noticias/0/3/11623/votorantim-cria-aplicativo-para-agendamento-da-vacina-contra-covid-19/' },
    { title: 'Control Panel', link: 'https://backoffice.vacina-votorantim.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS, TechEnum.PWA],
  orientation: OrientationEnum.VERTICAL,
  position: 8,
};
