export enum TechEnum {
  ANGULAR = 1,
  IONIC = 2,
  NESTJS = 3,
  PWA = 4,
  REACT = 5,
  FLUTTER = 6,
  UNITY = 7,
}

export const formattedTechEnum: Record<TechEnum, string> = {
  [TechEnum.ANGULAR]: 'Angular',
  [TechEnum.IONIC]: 'Ionic',
  [TechEnum.NESTJS]: 'NestJs',
  [TechEnum.PWA]: 'PWA',
  [TechEnum.REACT]: 'React',
  [TechEnum.FLUTTER]: 'Flutter',
  [TechEnum.UNITY]: 'Unity',
}
