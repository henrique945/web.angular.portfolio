//#region Imports

import { PositionInterface } from '../../models/interfaces/position.interface';

//#endregion

export const dev_pro: PositionInterface = {
  isActive: true,
  role: 'Software Engineer',
  company: 'Dev.Pro',
  period: 'Mar 2023 – Sep 2023',
  summary: 'Global software development partner headquartered in the US.',
  achievements: [
    'Developed Angular and Node.js applications for Xenial Data Management Cloud, part of Global Payments.',
    'Contributed to restaurant and retail systems used by brands including Taco Bell and Burger King.',
    'Wrote unit, integration and end-to-end tests while working with an international team and CI/CD pipelines.',
  ],
  backgroundColor: 'var(--primary-color)',
  position: 2,
};
