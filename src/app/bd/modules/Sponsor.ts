import { Projet } from './projet';

export  class Sponsor{
  idSponsor : number;
  nomSponsor : string;
  type : string;
  projets: Projet = new Projet();

}
