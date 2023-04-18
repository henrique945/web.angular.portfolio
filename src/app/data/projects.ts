//#region Imports

import { ProjectInterface } from '../models/interfaces/project.interface';
import { abb } from './projects/abb';
import { adpoints } from './projects/adpoints';
import { ayrtonSenna } from './projects/ayrton-senna';
import { checkinCampus } from './projects/checkin-campus';
import { cti } from './projects/cti';
import { dpr } from './projects/dpr';
import { ecologicatech } from './projects/ecologicatech';
import { emerson } from './projects/emerson';
import { fablab } from './projects/fablab';
import { facens } from './projects/facens';
import { iquot } from './projects/iquot';
import { learnbox } from './projects/learnbox';
import { novaAula } from './projects/nova-aula';
import { vaccine } from './projects/vaccine';
import { villaFlora } from './projects/villa-flora';
import { yesno } from './projects/yesno';
import { zoo } from './projects/zoo';

//#endregion

export const projects: ProjectInterface[] = [
  abb,
  adpoints,
  ayrtonSenna,
  checkinCampus,
  cti,
  dpr,
  ecologicatech,
  emerson,
  fablab,
  facens,
  iquot,
  learnbox,
  villaFlora,
  novaAula,
  yesno,
  zoo,
  vaccine,
];

export const projectsSorted: ProjectInterface[] = projects.sort((p1, p2) => p1.position >= p2.position ? 1 : -1)

export const listProjects: ProjectInterface[] = projectsSorted.filter(project => project.isActive);
