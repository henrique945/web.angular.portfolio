//#region Imports

import { PositionInterface } from '../models/interfaces/position.interface';
import { liga } from './positions/liga';
import { dev_pro } from './positions/dev_pro';
import { icanotes } from './positions/icanotes';

//#endregion

export const positions: PositionInterface[] = [
  // infoJr,
  dev_pro,
  liga,
  icanotes,
  // educaprat,
  // going2,
];

export const positionsSorted: PositionInterface[] = positions.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);

export const listPositions: PositionInterface[] = positionsSorted.filter(p => p.isActive);
