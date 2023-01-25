import { OrientationEnum } from '../enums/orientation.enum';
import { ProjectTagsEnum } from '../enums/project-tags.enum';
import { ProjectLinkInterface } from './project-link.interface';

export interface ProjectInterface {
  name: string;
  links: ProjectLinkInterface[];
  imageUrls: string[];
  coverImage: string;
  icon: string;
  description: string;
  features: string[];
  tags: ProjectTagsEnum[];
  techs: string[];
  orientation: OrientationEnum;
}
