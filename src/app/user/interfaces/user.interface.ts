export interface User {
  ID:                     number;
  USERNAME:               string;
  posX:                   number;
  posY:                   number;
  posZ:                   number;
  posAng:                 number;
  MONEY:                  number;
  ARMOUR:                 number;
  HEALTH:                 number;
  PASSWORD:               string;
  LEVEL:                  number;
  SALT:                   null | string;
  SKIN:                   number;
  DEATH:                  Death;
  SLOT_0:                 number;
  SLOT_1:                 number;
  SLOT_2:                 number;
  SLOT_3:                 number;
  SLOT_4:                 number;
  SLOT_5:                 number;
  SLOT_6:                 number;
  SLOT_8:                 number;
  SLOT_9:                 number;
  interior:               number | null;
  virtualworld:           number | null;
  pickupid_house_cercano: number | null;
  trabajo_uno:            number;
  trabajo_dos:            number;
  telefono:               number;
  numero_telefono:        number;
}

export interface Death {
  type: Type;
  data: number[];
}

export enum Type {
  Buffer = "Buffer",
}
