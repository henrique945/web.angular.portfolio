//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const checkinCampus: ProjectInterface = {
  isActive: true,
  id: 'checkinCampus',
  name: 'Checkin Campus',
  coverImage: 'assets/imgs/projects/checkinCampus/checkinCampus9.thumb.webp',
  developmentDate: '01/08/2019 ~ 10/09/2019',
  description: '<b>Checkin Campus</b> managed student access to the Facens and Newton university campuses during the pandemic. Students completed a health questionnaire before entry, while administrators reviewed access and quarantine indicators.\n\n' +
    'The PWA used <b>Angular, NestJS, PostgreSQL</b> and <b>AWS Lambda and S3</b>, with integrations to the universities’ authentication systems.',
  outcome: 'The mandatory access workflow served more than 10,000 students and required AWS Lambda capacity to scale for concurrent demand.',
  imageUrls: [
    'assets/imgs/projects/checkinCampus/checkinCampus1.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus2.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus3.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus4.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus5.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus6.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus7.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus8.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus9.webp',
    'assets/imgs/projects/checkinCampus/checkinCampus10.webp',
  ],
  links: [
    { title: 'Site', link: 'https://checkin-campus.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.PWA, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  featured: true,
  featureTier: 'impact',
  summary: 'Campus access workflows scaled for more than 10,000 students.',
  role: 'Full-Stack Engineer',
  contributions: [
    'Built the student health questionnaire and campus access flow.',
    'Delivered administrative indicators for access and quarantine decisions.',
    'Scaled AWS Lambda capacity to handle concurrent demand.',
  ],
  metrics: ['10,000+ students', 'Two university campuses', 'AWS Lambda scaling'],
  challenge: 'Support a mandatory, time-sensitive campus access workflow for two universities during the pandemic.',
  improvements: [
    'Integrated the PWA with Facens and Newton authentication systems.',
    'Built health screening and access-status workflows for students.',
    'Added administrative reporting for approved and quarantined students.',
    'Scaled Lambda capacity in response to simultaneous access demand.',
  ],
  decisions: [
    'Used a PWA so students could complete the process quickly from their own devices.',
    'Used serverless AWS infrastructure to adjust compute capacity for demand peaks.',
    'Connected both institutions through their existing authentication systems.',
  ],
  coverCaption: 'Mobile campus check-in and health-screening experience.',
  imageCaptions: [
    'Student entry point for the campus access workflow.',
    'Authentication integrated with the participating university.',
    'Health questionnaire used before campus access.',
    'Student access status after questionnaire submission.',
    'Mobile guidance for the campus entry process.',
    'Administrative overview of campus access responses.',
    'Reporting view for approved and quarantined students.',
    'Operational filters used by campus administrators.',
    'Dashboard for monitoring the access workflow.',
    'Additional administrative detail for screening results.',
  ],
};
