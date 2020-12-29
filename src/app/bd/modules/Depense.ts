import {Orientation} from './orientation';
import {Devision} from './Devision';
import {Mandat} from "./Mandat";

export class Depense {
    idDepense: number;
    dateDengagement: Date = new Date();
    objet: string;
    mantantDengagement: number;
    montantCredit: number;
    creditDispo: number;
    dateVisa: Date = new Date();
    observation: string;
    imputationBudgetaires: string;
    nomPartiesPrenantes: string;
    objectifMondat: string;
    totalArticle: number;
    devision: Devision = new Devision();
  mandat: Mandat = new Mandat();
}
