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
  description: 'Built with <b>TypeScript, Angular, NestJS, Node.js, MySQL</b> and <b>AWS</b>.\n\n' +
    '<b>ICANotes</b> is an ONC-certified, HIPAA-compliant behavioral health EHR used by therapists, psychiatrists and psychologists across the US — integrating charting, scheduling, telehealth and <b>billing/revenue cycle</b> in a single cloud platform.\n\n' +
    'I work on the <b>billing and payments</b> domain, including:\n\n' +
    '• <b>Billing Worklist (v2)</b> — advanced filters, unbilled encounters, CSV export and claim status tracking.\n\n' +
    '• <b>Insurance & payments</b> — primary/secondary insurance, eligibility checks, invoicing and patient statements on the chart face.\n\n' +
    '• <b>ERA processing</b> — auto-posting of Electronic Remittance Advice (ERA/EOB) from American insurance carriers.\n\n' +
    'Collaborating remotely with US stakeholders, participating in architecture discussions and code reviews.',
  outcome: 'Production billing modules used daily by behavioral health practices across the US.',
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
  summary: 'Billing and revenue-cycle workflows for a US behavioral healthcare EHR.',
  role: 'Senior Software Engineer',
  contributions: [
    'Built billing worklists, insurance eligibility and patient payment workflows.',
    'Developed ERA auto-posting integrations for American insurance carriers.',
    'Contributed to architecture decisions and cross-functional delivery with US stakeholders.',
  ],
  metrics: ['Production healthcare SaaS', 'Used daily across the US', 'HIPAA-sensitive domain'],
  seoDescription: 'ICANotes case study: billing, insurance and ERA workflows built with Angular, NestJS, MySQL and AWS for US behavioral healthcare.',
  socialImage: 'assets/imgs/projects/icanotes/icanotes-billing-worklist.webp',
};
