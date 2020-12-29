import {Type} from './Type';
import {Devision} from "./Devision";

export  class Recette {
    idRecette: number;
    codeEconomique: string;
    montant: number;
  date: Date = new Date();
  division: Devision = new Devision();
    type: Type = new Type();

}
