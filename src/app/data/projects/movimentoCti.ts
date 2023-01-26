import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const movimentoCti: ProjectInterface = {
  name: 'Movimento CTI',
  description: '',
  coverImage: 'assets/imgs/projects/movimentoCti/cti1.PNG',
  icon: 'assets/imgs/projects/movimentoCti/icon.png',
  features: [],
  imageUrls: [
    'assets/imgs/projects/movimentoCti/cti1.PNG',
    'assets/imgs/projects/movimentoCti/cti2.PNG',
    'assets/imgs/projects/movimentoCti/cti3.PNG',
  ],
  links: [
    { title: 'Site', link: 'https://clinicamovimento.firebaseapp.com/' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.HORIZONTAL,
};
