//#region Imports

import { PositionInterface } from '../../models/interfaces/position.interface';

//#endregion

export const icanotes: PositionInterface = {
  isActive: true,
  role: 'Senior Software Engineer',
  company: 'ICANotes',
  period: 'Sep 2023 – Present',
  summary: 'Behavioral healthcare EHR for US clinicians and large practices.',
  achievements: [
    'Reduced worklist p95 latency from 47s to 9s in k6 tests and traced 46.9s lock waits to duplicate requests.',
    'Built Angular applications and Node.js/NestJS services for clinical, billing and insurance workflows, including ERA payment reconciliation.',
    'Led the team temporarily and worked with US stakeholders on planning, architecture, reviews and production observability.',
  ],
  backgroundColor: 'var(--secondary-color)',
  position: 1,
};
