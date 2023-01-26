import { OrientationEnum } from '../enums/orientation.enum';
import { ProjectTagsEnum } from '../enums/project-tags.enum';
import { TechEnum } from '../enums/tech.enum';
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
  techs: TechEnum[];
  orientation: OrientationEnum;
}
