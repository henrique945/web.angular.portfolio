import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const learnbox: ProjectInterface = {
  name: 'Learnbox',
  description: '',
  coverImage: 'assets/imgs/projects/learnbox/learnbox5.PNG',
  icon: 'assets/imgs/projects/learnbox/icon.png',
  features: [],
  imageUrls: [
    'assets/imgs/projects/learnbox/learnbox1.PNG',
    'assets/imgs/projects/learnbox/learnbox2.PNG',
    'assets/imgs/projects/learnbox/learnbox3.PNG',
    'assets/imgs/projects/learnbox/learnbox4.PNG',
    'assets/imgs/projects/learnbox/learnbox5.PNG',
    'assets/imgs/projects/learnbox/learnbox6.PNG',
    'assets/imgs/projects/learnbox/learnbox7.PNG',
    'assets/imgs/projects/learnbox/learnbox8.PNG',
    'assets/imgs/projects/learnbox/learnbox9.PNG',
    'assets/imgs/projects/learnbox/learnbox10.PNG',
  ],
  links: [
    { title: 'App', link: 'https://play.google.com/store/apps/details?id=liga.app.learnbox&pli=1' },
  ],
  tags: [],
  techs: [],
  orientation: OrientationEnum.VERTICAL,
};
