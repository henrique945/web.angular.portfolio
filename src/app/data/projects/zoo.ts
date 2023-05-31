//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const zoo: ProjectInterface = {
  isActive: true,
  id: 'zoo',
  name: 'Zoo PZMQB',
  coverImage: 'assets/imgs/projects/zoo/zoo9.PNG',
  developmentDate: '09/12/2019 ~ 10/09/2021',
  description: 'Developed in <b>Ionic/Angular (HTML, SASS, Typescript)</b> using <b>WebAnimationJs</b>, <b>PinchZoomJs</b>, <b>Leaflet for maps</b> and <b>integrated with QR Code</b>.\n\n' +
    'Project developed for the <b>Zoo PZMQB</b> for children to have fun and learn more about animals.\n\n' +
    'We have an <b>integrated missions system with QrCode</b> spread over several animals in the zoo and as a reward for the missions, each user gets a <b>sticker</b> and can complete their <b>virtual album</b> and win prizes.\n\n' +
    'Besides all <b>information, events and stories</b> about the zoo and the animals.\n',
  outcome: 'The project was a success in the city of the zoo, with a score of 4.5/5 in the store.',
  imageUrls: [
    'assets/imgs/projects/zoo/zoo1.jpeg',
    'assets/imgs/projects/zoo/zoo2.JPG',
    'assets/imgs/projects/zoo/zoo3.JPG',
    'assets/imgs/projects/zoo/zoo4.jpeg',
    'assets/imgs/projects/zoo/zoo5.jpeg',
    'assets/imgs/projects/zoo/zoo6.jpeg',
    'assets/imgs/projects/zoo/zoo7.jpeg',
    'assets/imgs/projects/zoo/zoo8.jpeg',
    'assets/imgs/projects/zoo/zoo9.PNG',
    'assets/imgs/projects/zoo/zoo10.PNG',
    'assets/imgs/projects/zoo/zoo11.PNG',
    'assets/imgs/projects/zoo/zoo12.PNG',
    'assets/imgs/projects/zoo/zoo13.jpg',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.zoologico' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/zoo-sorocaba/id1494350969' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
};
