import {StatutDemande} from './StatutDemande';
import {Type} from './Type';
import {Compagne} from './Compagne';
import {Projet} from "./projet";

export class DemandeBudget {
    idDemande: number;
    montantDemande: number;
    montantProposeBureau: number;
    montantValideConseil: number;
    montantAlloue: number;
    statutDemande: StatutDemande = new StatutDemande();
    type: Type = new Type();
    compagne: Compagne = new Compagne();
     projetd: Projet = new Projet();

}


