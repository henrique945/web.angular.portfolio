//#region Imports

import { PositionInterface } from '../models/interfaces/position.interface';
import { educaprat } from './positions/educaprat';
import { infoJr } from './positions/infoJr';
import { liga } from './positions/liga';

//#endregion

export const positions: PositionInterface[] = [
  infoJr,
  liga,
  educaprat,
];

export const positionsSorted: PositionInterface[] = positions.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);

export const listPositions: PositionInterface[] = positionsSorted.filter(p => p.isActive);
