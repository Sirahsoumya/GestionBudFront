import {StatutDemande} from './StatutDemande';
import { Devision } from './Devision';

export class DemandeTransfert {
    numDemande: number;
    dateDemande: Date = new Date();
    typeDemande: string;
    montantTransfert: number;
    ligneBudgetaire: number;
    statutDemande: StatutDemande = new StatutDemande();
    division: Devision = new Devision();

}
