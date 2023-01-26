import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const uqr: ProjectInterface = {
  name: 'UQR - Educação que liberta',
  description: '',
  coverImage: 'assets/imgs/projects/uqr/uqr1.PNG',
  icon: 'assets/imgs/projects/uqr/icon.ico',
  features: [],
  imageUrls: [
    'assets/imgs/projects/uqr/uqr1.PNG',
    'assets/imgs/projects/uqr/uqr2.PNG',
    'assets/imgs/projects/uqr/uqr3.PNG',
    'assets/imgs/projects/uqr/uqr4.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://www.universidadeuqr.com.br/' },
    { title: 'Painel de Controle', link: 'https://backoffice.universidadeuqr.com.br/' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.HORIZONTAL,
};
