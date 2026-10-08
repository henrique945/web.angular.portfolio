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
  coverImage: 'assets/imgs/projects/bolao-uol/bolao-home.webp',
  developmentDate: '2022',
  description: '<b>Bolão do UOL</b> is a World Cup prediction platform with match predictions, private groups, rankings and scoring history. The product was built with <b>Angular, NestJS</b> and <b>PostgreSQL</b> for a high-concurrency live sports context.\n\n' +
    'I used <b>k6</b> load tests and <b>Azure Application Insights</b> to evaluate request throughput and observe service and database behavior under concurrent load.',
  outcome: 'k6 load testing reached approximately 418 requests per second, with 99.73% of checks passing.',
  imageUrls: [
    'assets/imgs/projects/bolao-uol/bolao-home.webp',
    'assets/imgs/projects/bolao-uol/bolao-palpites.webp',
    'assets/imgs/projects/bolao-uol/bolao-invite.webp',
    'assets/imgs/projects/bolao-uol/bolao-app-insights.webp',
    'assets/imgs/projects/bolao-uol/bolao-db-connections.webp',
  ],
  links: [
    { title: 'Bolão do UOL', link: 'https://www.uol.com.br/esporte/futebol/copa-do-mundo/jogos/bolao-do-uol.htm' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  featured: true,
  featureTier: 'primary',
  summary: 'World Cup prediction platform engineered for high-traffic live sports events.',
  role: 'Full-Stack Engineer',
  contributions: [
    'Built prediction, private group, ranking and scoring-history experiences.',
    'Validated peak traffic behavior with k6 and Azure Application Insights.',
    'Assessed service and database behavior under concurrent load.',
  ],
  metrics: ['~418 requests/second', '99.73% of load-test checks passed', 'k6 + Application Insights'],
  challenge: 'Prepare a World Cup prediction experience for sharp concurrency peaks while keeping group, ranking and scoring workflows responsive.',
  improvements: [
    'Built match prediction, private group, ranking and scoring-history experiences.',
    'Created k6 load scenarios to measure the platform under concurrent traffic.',
    'Used Azure Application Insights to inspect service and database behavior during the tests.',
  ],
  decisions: [
    'Used Angular for the interactive product experience and NestJS with PostgreSQL for the API and persistence layers.',
    'Kept observability evidence inside the case study so performance claims remain tied to test results.',
    'Reported test throughput and passing checks separately from production audience claims.',
  ],
  coverCaption: 'World Cup prediction experience for creating picks and following the competition.',
  imageCaptions: [
    'Main Bolão do UOL experience for the World Cup competition.',
    'Match prediction flow for submitting picks.',
    'Private group invitation flow for competing with friends.',
    'Azure Application Insights evidence captured during concurrent load testing.',
    'Database connection behavior observed during performance testing.',
  ],
  seoDescription: 'Bolão do UOL case study: an Angular and NestJS World Cup prediction platform validated for high traffic and concurrency.',
  socialImage: 'assets/imgs/projects/bolao-uol/bolao-home.webp',
};
