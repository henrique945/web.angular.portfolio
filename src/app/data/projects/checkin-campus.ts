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
  coverImage: 'assets/imgs/projects/checkinCampus/checkinCampus9.png',
  developmentDate: '01/08/2019 ~ 10/09/2019',
  description: 'Developed in <b>Angular (HTML, SASS, Typescript)</b> as a <b>PWA</b> and <b>NestJs (NodeJs + PostgresSQL)</b> with <b>AWS Cloud (Aws Lambda + S3)</b> and integrated with <b>Facens/Newton university authentication system</b>.\n\n' +
    'Project to control student access to <b>Facens (SP-Brazil)</b> and <b>Newton (MG-Brazil)</b> university campuses during the pandemic.\n\n' +
    'The student needs to answer some questions about his health to be released on campus. In case access is denied, the student is removed according to the severity of the symptoms.\n\n' +
    'In the <b>administrative panel, the administrator has access to graphs of students</b> who passed or were quarantined and their reasons.\n',
  outcome: 'Due to being mandatory to enter the campus, the system had more than 10k students and great simultaneous access, being necessary to scale the amount of lambdas in Aws.',
  imageUrls: [
    'assets/imgs/projects/checkinCampus/checkinCampus1.png',
    'assets/imgs/projects/checkinCampus/checkinCampus2.png',
    'assets/imgs/projects/checkinCampus/checkinCampus3.png',
    'assets/imgs/projects/checkinCampus/checkinCampus4.png',
    'assets/imgs/projects/checkinCampus/checkinCampus5.png',
    'assets/imgs/projects/checkinCampus/checkinCampus6.png',
    'assets/imgs/projects/checkinCampus/checkinCampus7.png',
    'assets/imgs/projects/checkinCampus/checkinCampus8.png',
    'assets/imgs/projects/checkinCampus/checkinCampus9.png',
    'assets/imgs/projects/checkinCampus/checkinCampus10.png',
  ],
  links: [
    { title: 'Site', link: 'https://checkin-campus.com/' },
  ],
  tags: [ProjectTagsEnum.MOBILE, ProjectTagsEnum.WEB, ProjectTagsEnum.APIS],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR, TechEnum.PWA, TechEnum.NESTJS],
  orientation: OrientationEnum.VERTICAL,
  position: 3,
};
