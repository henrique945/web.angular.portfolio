import { ProjectTagsEnum } from '../enums/project-tags.enum';
import { ProjectLinkInterface } from './project-link.interface';

export interface ProjectInterface {
  name: string;
  links: ProjectLinkInterface[];
  imageUrls: string[];
  icon: string;
  description: string;
  features: string[];
  tags: ProjectTagsEnum[];
}
