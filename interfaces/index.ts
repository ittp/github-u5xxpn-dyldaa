export type User = {
  id: number;
  name?: string;
};
export type Room = {
  id: unique;
  key: number;
  name?: string;
  users: User
};

export type Host = {
  mac: string;
  comment?: string;
  hostname?: string;
  enable: string,
  ip: string;
}


export type Address = {
  street: string;
  building: number || any
  
}


export type ZabbixHost = {
  host: string;
  name: string;
  description: string;
  templates?: Array;
  groups?: Array;
  interfaces?: Array;
  macros?: Array;
};
