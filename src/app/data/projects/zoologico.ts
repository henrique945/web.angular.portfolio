import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const zoologico: ProjectInterface = {
  name: 'Zoológico PZMQB',
  description: '',
  coverImage: 'assets/imgs/projects/zoologico/zoologico9.PNG',
  icon: 'assets/imgs/projects/zoologico/icon.png',
  features: [],
  imageUrls: [
    'assets/imgs/projects/zoologico/layout.jpg',
    'assets/imgs/projects/zoologico/zoologico1.jpeg',
    'assets/imgs/projects/zoologico/zoologico2.JPG',
    'assets/imgs/projects/zoologico/zoologico3.png',
    'assets/imgs/projects/zoologico/zoologico4.jpeg',
    'assets/imgs/projects/zoologico/zoologico5.jpeg',
    'assets/imgs/projects/zoologico/zoologico6.jpeg',
    'assets/imgs/projects/zoologico/zoologico7.jpeg',
    'assets/imgs/projects/zoologico/zoologico8.jpeg',
    'assets/imgs/projects/zoologico/zoologico9.PNG',
    'assets/imgs/projects/zoologico/zoologico10.PNG',
    'assets/imgs/projects/zoologico/zoologico11.PNG',
    'assets/imgs/projects/zoologico/zoologico12.PNG',
  ],
  links: [
    { title: 'App', link: 'https://play.google.com/store/apps/details?id=com.liga.zoologico' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.VERTICAL,
};
