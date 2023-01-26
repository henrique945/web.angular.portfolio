import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const iquot: ProjectInterface = {
  name: 'Iquot',
  description: '',
  coverImage: 'assets/imgs/projects/iquot/iquot7.PNG',
  icon: 'assets/imgs/projects/iquot/icon.webp',
  features: [],
  imageUrls: [
    'assets/imgs/projects/iquot/iquot1.PNG',
    'assets/imgs/projects/iquot/iquot2.webp',
    'assets/imgs/projects/iquot/iquot3.webp',
    'assets/imgs/projects/iquot/iquot4.webp',
    'assets/imgs/projects/iquot/iquot5.webp',
    'assets/imgs/projects/iquot/iquot6.PNG',
    'assets/imgs/projects/iquot/iquot7.PNG',
  ],
  links: [
    { title: 'App', link: 'https://play.google.com/store/apps/details?id=com.liga.android.iquot' },
    { title: 'Painel de Controle', link: 'https://backoffice-dev.iquot.ligafacens.com/' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.VERTICAL,
};
