//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const poliedro: ProjectInterface = {
  isActive: true,
  id: 'poliedro',
  name: 'Poliedro P+ Kids',
  coverImage: 'assets/imgs/projects/poliedro/poliedro6.thumb.webp',
  developmentDate: '14/06/2021 ~ 17/10/2021',
  description: '<b>Poliedro P+ Kids</b> gives students and guardians access to schedules, grades, messages, assignments, learning materials and performance analysis. I developed backend services and integrations with <b>NestJS, PostgreSQL</b> and <b>MongoDB</b>.',
  outcome: 'Backend services supported an education platform serving more than 100,000 users.',
  imageUrls: [
    'assets/imgs/projects/poliedro/poliedro1.webp',
    'assets/imgs/projects/poliedro/poliedro2.webp',
    'assets/imgs/projects/poliedro/poliedro3.webp',
    'assets/imgs/projects/poliedro/poliedro4.webp',
    'assets/imgs/projects/poliedro/poliedro5.webp',
    'assets/imgs/projects/poliedro/poliedro6.webp',
    'assets/imgs/projects/poliedro/poliedro7.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.daitangroup.poliedro.activitymanager' },
    { title: 'Poliedro', link: 'https://www.sistemapoliedro.com.br/' },
    { title: 'Panel', link: 'https://pmais-development.p4ed.com/' },
  ],
  tags: [ProjectTagsEnum.APIS],
  techs: [TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  featured: true,
  featureTier: 'impact',
  summary: 'Backend services for an education platform serving 100,000+ users.',
  role: 'Backend Engineer',
  contributions: [
    'Built NestJS APIs for student and guardian workflows.',
    'Integrated platform data across PostgreSQL, MongoDB and Poliedro services.',
  ],
  metrics: ['100,000+ users', 'Education platform', 'PostgreSQL + MongoDB'],
  challenge: 'Expose academic information from multiple systems through a practical experience for a large community of students and guardians.',
  improvements: [
    'Built APIs for schedules, grades, messages, assignments and learning materials.',
    'Integrated academic data used by student and guardian experiences.',
    'Supported performance and simulation feedback workflows at platform scale.',
  ],
  decisions: [
    'Used NestJS to organize backend APIs and integrations.',
    'Worked with PostgreSQL and MongoDB to support the platform’s different data needs.',
  ],
  coverCaption: 'Poliedro P+ experience for students and guardians.',
  imageCaptions: [
    'Student-facing academic overview.',
    'Learning content and school information.',
    'Academic activities available through the platform.',
    'Student progress and performance information.',
    'Guardian and student communication experience.',
    'Poliedro P+ navigation across academic services.',
    'Mobile access to the education platform.',
  ],
};
