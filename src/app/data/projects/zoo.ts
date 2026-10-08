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
  coverImage: 'assets/imgs/projects/zoo/zoo9.thumb.webp',
  developmentDate: '09/12/2019 ~ 10/09/2021',
  description: 'An educational <b>Ionic/Angular</b> app for PZMQB Zoo, using Web Animations, pinch-to-zoom, Leaflet maps and QR codes.\n\n' +
    'Children scan codes near animal exhibits to complete missions, collect virtual stickers and fill an album. The app also presents animal information, zoo stories and events.',
  outcome: 'The app received a 4.5/5 store rating.',
  imageUrls: [
    'assets/imgs/projects/zoo/zoo1.webp',
    'assets/imgs/projects/zoo/zoo2.webp',
    'assets/imgs/projects/zoo/zoo3.webp',
    'assets/imgs/projects/zoo/zoo4.webp',
    'assets/imgs/projects/zoo/zoo5.webp',
    'assets/imgs/projects/zoo/zoo6.webp',
    'assets/imgs/projects/zoo/zoo7.webp',
    'assets/imgs/projects/zoo/zoo8.webp',
    'assets/imgs/projects/zoo/zoo9.webp',
    'assets/imgs/projects/zoo/zoo10.webp',
    'assets/imgs/projects/zoo/zoo11.webp',
    'assets/imgs/projects/zoo/zoo12.webp',
    'assets/imgs/projects/zoo/zoo13.webp',
  ],
  links: [
    { title: 'Play Store', link: 'https://play.google.com/store/apps/details?id=com.liga.zoologico' },
    { title: 'Apple Store', link: 'https://apps.apple.com/br/app/zoo-sorocaba/id1494350969' },
  ],
  tags: [ProjectTagsEnum.MOBILE],
  techs: [TechEnum.IONIC, TechEnum.ANGULAR],
  orientation: OrientationEnum.VERTICAL,
};
