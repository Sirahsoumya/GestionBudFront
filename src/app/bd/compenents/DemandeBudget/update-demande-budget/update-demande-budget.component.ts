import { Component, OnInit } from '@angular/core';
import {Type} from "../../../modules/Type";
import {Compagne} from "../../../modules/Compagne";
import {StatutDemande} from "../../../modules/StatutDemande";
import {ActivatedRoute, Router} from "@angular/router";
import {DemandeBudgetService} from "../../../services/demande-budget.service";
import {Projet} from "../../../modules/projet";
import {DemandeBudget} from "../../../modules/DemandeBudget";

@Component({
  selector: 'app-update-demande-budget',
  templateUrl: './update-demande-budget.component.html',
  styleUrls: ['./update-demande-budget.component.css']
})
export class UpdateDemandeBudgetComponent implements OnInit {
  demandeBudget: any;
  types: Type[];
  compagnes: Compagne[];
  statutDemandes: StatutDemande[];
  projet: Projet;
  projets: Projet[];
  type: Type = new Type();
  statutDemande: StatutDemande;
  compagne: Compagne ;

  constructor(private route: ActivatedRoute, private demandeBudgetService: DemandeBudgetService, private router: Router) {
    this.demandeBudget = new DemandeBudget();
    this.compagne = new Compagne();
    this.statutDemande = new StatutDemande();
    this.type = new Type();
    this.projet = new Projet();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.demandeBudgetService.findByIdDemandeBudget(id).subscribe(data => {
      this.demandeBudget = data;
    });
  }

  onSubmitUpdateDemandeBudget() {
    this.demandeBudgetService.updateDemandeBudget(this.demandeBudget).subscribe(result => this.gotoNewListDemandeBudget());
  }
  gotoNewListDemandeBudget() {
    this.router.navigate(['/listDemandeBudget']);
  }

}
