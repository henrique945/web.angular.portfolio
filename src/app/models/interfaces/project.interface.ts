import { ProjectLinkInterface } from './project-link.interface';

export interface ProjectInterface {
  name: string;
  links: ProjectLinkInterface[];
  imageUrls: string[];
  icon: string;
  description: string;
  features: string[];
}
