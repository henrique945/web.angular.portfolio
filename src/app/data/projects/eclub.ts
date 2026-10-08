//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const eclub: ProjectInterface = {
  isActive: true,
  id: 'eclub',
  name: 'eClub',
  coverImage: 'assets/imgs/projects/eclub/eclub-cover.thumb.webp',
  developmentDate: '2021 ~ 2023',
  description: '<b>eClub</b> is a white-label, multi-tenant sports engagement platform built with <b>Ionic, Angular, NestJS, PostgreSQL</b> and <b>AWS</b>. It was deployed for Brazilian football clubs and media partners, including <b>Grêmio, Vasco, Globo, UOL and Flamengo</b>, and served thousands of users.\n\n' +
    'The platform features <b>gamification</b> (coins, trophies, seasonal rankings), <b>daily check-in</b>, <b>missions</b>, <b>quizzes</b>, <b>mini-games</b>, a <b>reward store</b> and <b>vouchers</b>, with full club branding per tenant.',
  outcome: 'Platform live across multiple club and media partners with thousands of active users during sports seasons.',
  imageUrls: [
    'assets/imgs/projects/eclub/eclub-cover.webp',
    'assets/imgs/projects/eclub/eclub-home.webp',
    'assets/imgs/projects/eclub/eclub-checkin.webp',
    'assets/imgs/projects/eclub/eclub-ranking.webp',
    'assets/imgs/projects/eclub/eclub-games.webp',
  ],
  links: [
    { title: 'Vasco App (Play Store)', link: 'https://play.google.com/store/apps/details?id=com.fanbase.app.vascocr' },
    { title: 'Vasco App (App Store)', link: 'https://apps.apple.com/app/vasco-app/id6753774969' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  featured: true,
  featureTier: 'primary',
  summary: 'White-label fan engagement platform for major Brazilian football and media brands.',
  role: 'Technical Lead / Full-Stack Engineer',
  contributions: [
    'Designed a multi-tenant platform with per-club branding and seasonal experiences.',
    'Delivered gamification, rankings, rewards, quizzes and daily engagement features.',
    'Built the Ionic/Angular client and NestJS/PostgreSQL services on AWS.',
  ],
  metrics: ['Multiple club and media partners', 'Thousands of active users', 'Multi-tenant platform'],
  challenge: 'Support distinct club and media brands, seasonal campaigns and high-engagement fan experiences without maintaining a separate product for every partner.',
  improvements: [
    'Designed a shared multi-tenant foundation with branding and content configured per partner.',
    'Delivered daily check-ins, missions, quizzes, mini-games, seasonal rankings and rewards.',
    'Built mobile experiences and backend services used across multiple club and media deployments.',
  ],
  decisions: [
    'Used a white-label architecture to reuse core behavior while preserving each tenant’s identity.',
    'Combined Ionic and Angular clients with NestJS and PostgreSQL services deployed on AWS.',
    'Modeled gamification as reusable capabilities that could be composed for different seasonal experiences.',
  ],
  coverCaption: 'White-label fan experience adapted to a partner’s visual identity.',
  imageCaptions: [
    'Branded eClub experience showing the reusable white-label product foundation.',
    'Tenant home screen with fan engagement actions and content.',
    'Daily check-in flow used to sustain recurring participation.',
    'Seasonal ranking experience driven by points and achievements.',
    'Mini-games delivered as part of the shared engagement platform.',
  ],
  seoDescription: 'eClub case study: a white-label sports engagement platform built with Ionic, Angular, NestJS, PostgreSQL and AWS.',
  socialImage: 'assets/imgs/projects/eclub/eclub-cover.webp',
};
