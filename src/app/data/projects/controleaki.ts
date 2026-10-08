import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const controleAki: ProjectInterface = {
  isActive: true,
  id: 'controleaki',
  name: 'ControleAki',
  coverImage: 'assets/imgs/projects/controleaki/controleaki-cover.webp',
  developmentDate: 'Sep 2026 ~ Present',
  description: '<b>ControleAki</b> is a multi-tenant restaurant SaaS for branded catalogs, table sessions, delivery and pickup orders, subscriptions and operational reporting. I built the product across an <b>Angular</b> backoffice, an <b>Ionic/Angular PWA</b> and a <b>NestJS</b> API running on AWS with PostgreSQL.\n\n' +
    'The platform integrates subscriptions and payment webhooks through <b>Asaas</b>, media uploads through S3, transactional email through SES, and ticket printing for restaurant operations.',
  outcome: 'Launched in September 2026 as a production SaaS with tenant-aware subdomains, branded storefronts and end-to-end ordering and subscription workflows.',
  imageUrls: [
    'assets/imgs/projects/controleaki/controleaki-reports.webp',
    'assets/imgs/projects/controleaki/controleaki-tables.webp',
    'assets/imgs/projects/controleaki/controleaki-subscriptions.webp',
    'assets/imgs/projects/controleaki/controleaki-storefront.webp',
    'assets/imgs/projects/controleaki/architecture.svg',
  ],
  links: [
    { title: 'ControleAki', link: 'https://controleaki.com.br/' },
  ],
  tags: [ProjectTagsEnum.WEB, ProjectTagsEnum.MOBILE, ProjectTagsEnum.APIS],
  techs: [TechEnum.ANGULAR, TechEnum.IONIC, TechEnum.NESTJS, TechEnum.PWA],
  orientation: OrientationEnum.HORIZONTAL,
  featured: true,
  featureTier: 'primary',
  summary: 'Multi-tenant restaurant SaaS for branded ordering, operations, subscriptions and reporting.',
  role: 'Co-founder / Software Engineer',
  contributions: [
    'Built and launched the full-stack product across backoffice, customer PWA and API.',
    'Implemented tenant isolation, subscription billing, transactional email and media workflows.',
    'Added retry-safe order creation, ticket printing and operational reporting.',
  ],
  metrics: ['Launched Sep 2026', 'Tenant-aware subdomains', 'Idempotent order flow'],
  challenge: 'Give restaurants a branded digital sales channel while keeping tenant data isolated and operational order flows reliable across tables, delivery and pickup.',
  improvements: [
    'Delivered tenant-aware subdomains and white-label storefront configuration.',
    'Built ordering, table sessions, operational reporting and usage controls end to end.',
    'Integrated Asaas subscriptions and payment webhooks, S3 media uploads and SES email.',
    'Protected order creation with idempotency, transactional snapshots and retry safeguards.',
    'Added installable PWA behavior and ticket printing for restaurant operations.',
  ],
  decisions: [
    'Separated the public site, restaurant backoffice and customer PWA behind a NestJS API boundary.',
    'Kept pricing and order snapshots server-side while applying tenant context to authentication and data access.',
    'Used AWS Lambda, S3, CloudFront, PostgreSQL and SES with idempotent handling for payment webhooks.',
    'Backed releases with CI/CD, end-to-end regression coverage and production observability.',
  ],
  coverCaption: 'ControleAki restaurant backoffice and white-label customer PWA shown with demonstration data.',
  imageCaptions: [
    'Operational reporting shown with demonstration data.',
    'Table sessions and in-venue ordering workflows.',
    'Subscription tiers and usage controls in the restaurant backoffice.',
    'White-label customer PWA for a demonstration restaurant.',
    'Production architecture and tenant-aware integration boundaries.',
  ],
  seoDescription: 'ControleAki case study: a multi-tenant restaurant SaaS built with Angular, Ionic, NestJS, PostgreSQL and AWS.',
  socialImage: 'assets/imgs/projects/controleaki/controleaki-cover.webp',
};
