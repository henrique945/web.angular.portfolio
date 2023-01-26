import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const adpoints: ProjectInterface = {
  name: 'Ad Points',
  description: '',
  coverImage: 'assets/imgs/projects/adpoints/points4.PNG',
  icon: 'assets/imgs/projects/adpoints/icon.ico',
  features: [],
  imageUrls: [
    'assets/imgs/projects/adpoints/points1.PNG',
    'assets/imgs/projects/adpoints/points2.PNG',
    'assets/imgs/projects/adpoints/points3.PNG',
    'assets/imgs/projects/adpoints/points4.PNG',
    'assets/imgs/projects/adpoints/layout.PNG',
  ],
  links: [
    { title: 'Painel de Controle', link: 'https://backoffice.adpoints.ligafacens.com/' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.VERTICAL,
};
