import {Marche} from './marche';
import {Programme} from './programme';
import {SourcheBudget} from './SourceBudget';
import {Perimetre} from './Perimetre';
import {StatutProjet} from './StatutProjet';
import {Devision} from './Devision';
import {DemandeBudget} from "./DemandeBudget";


export class Projet {
  idProjet: number;
  libelle: string;
  finalite: string;
  demaragePrevue: Date = new Date();
  demarageReelle: Date = new Date();
  realisationPrevue: Date = new Date();
  realisationReelle: Date = new Date();
  budgetRealisation: number;
  contributionBudgetFinanc: number;
  budgetConsomme: number;
  etatAvancementTheorique: number;
  etatAvancementReelle: number;
  description: string;
  source: string;
  sourceBudget: SourcheBudget = new SourcheBudget();
  marche: Marche = new Marche();
  programme: Programme = new Programme();
  perimetre: Perimetre = new Perimetre();
  statutProjet: StatutProjet = new StatutProjet();
  devision: Devision = new Devision();




}
