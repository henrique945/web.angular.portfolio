//#region Imports

import { OrientationEnum } from '../enums/orientation.enum';
import { ProjectTagsEnum } from '../enums/project-tags.enum';
import { TechEnum } from '../enums/tech.enum';
import { ProjectLinkInterface } from './project-link.interface';

//#endregion

export interface ProjectInterface {
  isActive: boolean;
  id: string;
  name: string;
  links: ProjectLinkInterface[];
  imageUrls: string[];
  coverImage: string;
  developmentDate: string;
  description: string;
  outcome: string;
  tags: ProjectTagsEnum[];
  techs: TechEnum[];
  orientation: OrientationEnum;
  summary?: string;
  role?: string;
  contributions?: string[];
  metrics?: string[];
  featured?: boolean;
  seoDescription?: string;
  socialImage?: string;
}
