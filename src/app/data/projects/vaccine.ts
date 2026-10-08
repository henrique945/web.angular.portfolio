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
  coverImage: 'assets/imgs/projects/vaccine/vaccine4.thumb.webp',
  developmentDate: '24/03/2021 ~ 20/05/2021',
  description: '<b>Vacina Votorantim</b> was a vaccination scheduling PWA for the city of Votorantim, São Paulo. The public experience and administrative panel were built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS Lambda and S3</b>.\n\n' +
    'The administrative workflow managed vaccination information, batches and appointments to help the city organize COVID-19 immunization.',
  outcome: 'The platform served more than 65,000 citizens during the city’s vaccination program.',
  imageUrls: [
    'assets/imgs/projects/vaccine/vaccine1.webp',
    'assets/imgs/projects/vaccine/vaccine2.webp',
    'assets/imgs/projects/vaccine/vaccine3.webp',
    'assets/imgs/projects/vaccine/vaccine4.webp',
    'assets/imgs/projects/vaccine/vaccine5.webp',
    'assets/imgs/projects/vaccine/vaccine6.webp',
  ],
  links: [
    { title: 'Site', link: 'https://site.vacina-votorantim.ligafacens.com/' },
    { title: 'Newspaper', link: 'https://www.votorantim.sp.gov.br/portal/noticias/0/3/11623/votorantim-cria-aplicativo-para-agendamento-da-vacina-contra-covid-19/' },
    { title: 'Control Panel', link: 'https://backoffice.vacina-votorantim.ligafacens.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS, TechEnum.PWA],
  orientation: OrientationEnum.VERTICAL,
  featured: true,
  featureTier: 'impact',
  summary: 'Public vaccination scheduling and operations for more than 65,000 citizens.',
  role: 'Full-Stack Engineer',
  contributions: [
    'Built the citizen-facing vaccination scheduling PWA.',
    'Delivered administrative workflows for vaccine batches and appointments.',
    'Implemented the platform with Angular, Ionic, NestJS, PostgreSQL and AWS services.',
  ],
  metrics: ['65,000+ citizens served', 'Public-sector health platform', 'PWA + serverless AWS'],
  challenge: 'Give citizens a straightforward way to schedule COVID-19 vaccination while enabling the city to coordinate appointments and vaccine batches.',
  improvements: [
    'Delivered a mobile-friendly PWA for citizen registration and scheduling.',
    'Built an administrative panel for vaccination data, batches and appointment operations.',
    'Connected the public and administrative experiences to a shared backend and database.',
  ],
  decisions: [
    'Used a PWA to make the service accessible without requiring an app-store installation.',
    'Used NestJS and PostgreSQL for operational workflows, with AWS Lambda and S3 for cloud delivery.',
  ],
  coverCaption: 'Citizen-facing vaccination scheduling experience.',
  imageCaptions: [
    'Entry point for the Votorantim vaccination service.',
    'Citizen identification and appointment workflow.',
    'Vaccination scheduling steps in the mobile PWA.',
    'Administrative overview for vaccination operations.',
    'Vaccine batch and appointment management.',
    'Operational view supporting the city’s vaccination program.',
  ],
};
