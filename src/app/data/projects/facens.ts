import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const facens: ProjectInterface = {
  name: 'Facens',
  description: '',
  coverImage: 'assets/imgs/projects/facens/facens1.webp',
  icon: 'assets/imgs/projects/facens/icon.png',
  features: [],
  imageUrls: [
    'assets/imgs/projects/facens/facens1.webp',
    'assets/imgs/projects/facens/facens2.webp',
    'assets/imgs/projects/facens/facens3.webp',
    'assets/imgs/projects/facens/facens4.webp',
  ],
  links: [
    { title: 'App', link: 'https://play.google.com/store/apps/details?id=liga.app.facens' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.VERTICAL,
};
