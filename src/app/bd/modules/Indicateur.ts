import {Projet} from "./projet";

export class Indicateur{
  idIndicateur: number;
  libelle: string;
  description: string;
  objectif: string;
  cible: string;
  actuel: string;
 projet: Projet = new Projet();
}
