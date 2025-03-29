import {Role} from "./role";

export interface User {
  id: string,
  username: string,
  nomEtPrenom: string,
  matricule: string,
  email: string,
  adresse: string,
  numero: string,
  password: string,
  roles: Role[]


}

export enum ERole {
  GUICHET = 'GUICHET',
  DDI = 'DDI',
  DPTE = 'DPTE'
}

