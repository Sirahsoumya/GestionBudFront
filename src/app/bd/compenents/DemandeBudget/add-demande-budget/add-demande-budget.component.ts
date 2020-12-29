import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Type} from '../../../modules/Type';
import {StatutDemande} from '../../../modules/StatutDemande';
import {Compagne} from '../../../modules/Compagne';
import {DemandeBudgetService} from '../../../services/demande-budget.service';
import {TypeService} from '../../../services/type.service';
import {CompagneService} from '../../../services/compagne.service';
import {StatutDemandeService} from '../../../services/statut-demande.service';
import {DemandeBudget} from '../../../modules/DemandeBudget';
import {ProjetService} from "../../../services/projet.service";
import {Projet} from "../../../modules/projet";


@Component({
  selector: 'app-add-demande-budget',
  templateUrl: './add-demande-budget.component.html',
  styleUrls: ['./add-demande-budget.component.css']
})
export class AddDemandeBudgetComponent implements OnInit {

  demandeBudget: DemandeBudget;
  type: Type = new Type();
  types: Type[];
  statutDemande: StatutDemande = new StatutDemande();
  statutDemandes: StatutDemande[];
  compagne: Compagne = new Compagne();
  compagnes: Compagne[];
  projet: Projet;
  projets: Projet[];
  constructor(private projetService: ProjetService, private demandeBudgetService: DemandeBudgetService, private router: Router, private typeService: TypeService, private compagneService: CompagneService, private statutDemandeService: StatutDemandeService) {
    this.demandeBudget = new DemandeBudget();
    this.compagne = new Compagne();
    this.statutDemande = new StatutDemande();
    this.type = new Type();
    this.projet = new Projet();
  }

  ngOnInit(): void {
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
    });
    this.statutDemandeService.getAllStatutDemande().subscribe(data => {
      this.statutDemandes = data;
    });
    this.typeService.getAllType().subscribe(data => {
      this.types = data;
    });
    this.compagneService.getAllCompagne().subscribe(data => {
      this.compagnes = data;
    });

  }
  onSubmitDemandeBudget() {
    console.log("save demande budget ts");
    console.log(this.demandeBudget.projetd);
      this.demandeBudgetService.saveDemandeBudget(this.demandeBudget).subscribe(result => this.gotoListDemandeBudget());
  }
  gotoListDemandeBudget() {
    this.router.navigate(['/listDemandeBudget']);
  }

}
