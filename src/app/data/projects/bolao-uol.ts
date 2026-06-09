//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const bolaoUol: ProjectInterface = {
  isActive: true,
  id: 'bolao-uol',
  name: 'Bolão do UOL',
  coverImage: 'assets/imgs/projects/bolao-uol/bolao-home.png',
  developmentDate: '2022',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> and <b>NestJs (NodeJs + PostgreSQL)</b> with <b>Azure Application Insights</b> monitoring.\n\n' +
    '<b>Bolão do UOL</b> is the World Cup prediction platform for millions of UOL users, featuring match predictions, private group rooms with invite codes, community rankings and a full prediction history with scoring breakdown.\n\n' +
    'Built to handle massive traffic spikes during live sports events. Stress testing with <b>k6</b> achieved ~<b>418 req/s</b>, <b>301,258 checks</b> and a <b>99.73% success rate</b>. Azure Live Metrics showed <b>91 servers</b> sustaining ~<b>400–600 req/s</b> with stable response times.\n\n' +
    'The <b>staging-chutometrodb</b> database handled ~<b>308 simultaneous active connections</b> with zero failed connections. Key endpoints include <b>/guess</b> and <b>/auth/external</b>.',
  outcome: 'Platform successfully handled World Cup traffic peaks with 99.73% check success rate and zero database connection failures under load.',
  imageUrls: [
    'assets/imgs/projects/bolao-uol/bolao-home.png',
    'assets/imgs/projects/bolao-uol/bolao-palpites.png',
    'assets/imgs/projects/bolao-uol/bolao-invite.png',
    'assets/imgs/projects/bolao-uol/bolao-app-insights.png',
    'assets/imgs/projects/bolao-uol/bolao-db-connections.png',
  ],
  links: [
    { title: 'Bolão do UOL', link: 'https://www.uol.com.br/esporte/futebol/copa-do-mundo/jogos/bolao-do-uol.htm' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
};
