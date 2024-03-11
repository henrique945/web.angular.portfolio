//#region Imports

import { ProjectInterface } from '../models/interfaces/project.interface';
import { abb } from './projects/abb';
import { adpoints } from './projects/adpoints';
import { assetHub } from './projects/asset-hub';
import { ayrtonSenna } from './projects/ayrton-senna';
import { checkinCampus } from './projects/checkin-campus';
import { cti } from './projects/cti';
import { dpr } from './projects/dpr';
import { ecologicatech } from './projects/ecologicatech';
import { emerson } from './projects/emerson';
import { fablab } from './projects/fablab';
import { facens } from './projects/facens';
import { falai } from './projects/falai';
import { iquot } from './projects/iquot';
import { learnbox } from './projects/learnbox';
import { mundoFacens } from './projects/mundo-facens';
import { mundoSbt } from './projects/mundo-sbt';
import { ncursos } from './projects/ncursos';
import { novaAula } from './projects/nova-aula';
import { poliedro } from './projects/poliedro';
import { proton } from './projects/proton';
import { terrex } from './projects/terrex';
import { toolbox } from './projects/toolbox';
import { usina } from './projects/usina';
import { vaccine } from './projects/vaccine';
import { villaFlora } from './projects/villa-flora';
import { yesno } from './projects/yesno';
import { zoo } from './projects/zoo';
import { tintim } from './projects/tintim';

//#endregion

export const projects: ProjectInterface[] = [
  ecologicatech,
  ncursos,
  usina,
  abb,
  poliedro,
  mundoSbt,
  adpoints,
  ayrtonSenna,
  checkinCampus,
  zoo,
  proton,
  terrex,
  falai,
  iquot,
  vaccine,
  facens,
  cti,
  dpr,
  emerson,
  fablab,
  learnbox,
  villaFlora,
  novaAula,
  yesno,
  mundoFacens,
  assetHub,
  toolbox,
  tintim,
];

export const listProjects: ProjectInterface[] = projects.filter(project => project.isActive);
