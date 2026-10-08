//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const icanotes: ProjectInterface = {
  isActive: true,
  id: 'icanotes',
  name: 'ICANotes',
  coverImage: 'assets/imgs/projects/icanotes/icanotes-billing-worklist.thumb.webp',
  developmentDate: 'Sep 2023 ~ Present',
  description: '<b>ICANotes</b> is a behavioral healthcare EHR for US clinicians and large practices. I build clinical, billing and insurance workflows with <b>TypeScript, Angular, NestJS, Node.js, MySQL</b> and <b>AWS</b>.\n\n' +
    'My work includes the billing worklist, insurance coverage queries, patient payments and <b>Electronic Remittance Advice (ERA)</b> processing for payment reconciliation. I also investigate production behavior through Kibana and collaborate with US product and engineering teams on planning, architecture and code reviews.',
  outcome: 'Reduced p95 latency for the unbilled encounters worklist from 47s to 9s in k6 load testing and addressed the duplicate-request path behind production lock contention.',
  imageUrls: [
    'assets/imgs/projects/icanotes/icanotes-billing-worklist.webp',
    'assets/imgs/projects/icanotes/icanotes-insurance.webp',
    'assets/imgs/projects/icanotes/icanotes-login.webp',
  ],
  links: [
    { title: 'ICANotes', link: 'https://www.icanotes.com/' },
    { title: 'Billing Features', link: 'https://www.icanotes.com/features/billing/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.NESTJS],
  orientation: OrientationEnum.HORIZONTAL,
  featured: true,
  featureTier: 'primary',
  summary: 'Billing and revenue-cycle workflows for a US behavioral healthcare EHR.',
  role: 'Senior Software Engineer',
  contributions: [
    'Built billing worklists, insurance eligibility and patient payment workflows.',
    'Developed ERA auto-posting integrations for American insurance carriers.',
    'Investigated production latency and lock contention through Kibana and database analysis.',
    'Contributed to architecture decisions and cross-functional delivery with US stakeholders.',
  ],
  metrics: ['47s → 9s p95 in k6', 'Lock waits traced up to 46.9s', 'US healthcare SaaS'],
  challenge: 'Improve the performance and reliability of billing workflows in a large behavioral healthcare EHR without compromising complex insurance and reconciliation rules.',
  improvements: [
    'Reduced the unbilled encounters worklist p95 from 47s to 9s in k6 load testing by simplifying insurance coverage queries.',
    'Traced production lock waits of up to 46.9s to repeated charge cancellation requests.',
    'Blocked duplicate UI requests and skipped database writes for charges already marked as aborted.',
    'Built ERA processing for insurance payments and reconciliation workflows.',
  ],
  decisions: [
    'Used k6 results and production Kibana evidence to prioritize changes instead of relying on anecdotal performance reports.',
    'Addressed duplicate operations at both the UI and persistence boundaries to reduce repeated work safely.',
    'Kept billing capabilities within the existing Angular, NestJS, MySQL and AWS platform.',
  ],
  coverCaption: 'Billing worklist used to review and manage unbilled encounters.',
  imageCaptions: [
    'Billing worklist with encounter filters and revenue-cycle actions.',
    'Insurance details used by clinical billing workflows.',
    'Secure entry point for the ICANotes healthcare platform.',
  ],
  seoDescription: 'ICANotes case study: billing, insurance and ERA workflows built with Angular, NestJS, MySQL and AWS for US behavioral healthcare.',
  socialImage: 'assets/imgs/projects/icanotes/icanotes-billing-worklist.webp',
};
