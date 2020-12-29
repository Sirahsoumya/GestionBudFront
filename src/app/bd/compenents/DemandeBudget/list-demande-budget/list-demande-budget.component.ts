import { Component, OnInit } from '@angular/core';
import {DemandeBudget} from '../../../modules/DemandeBudget';
import {StatutDemande} from '../../../modules/StatutDemande';
import {Type} from '../../../modules/Type';
import {Compagne} from '../../../modules/Compagne';
import {DemandeBudgetService} from '../../../services/demande-budget.service';

@Component({
  selector: 'app-list-demande-budget',
  templateUrl: './list-demande-budget.component.html',
  styleUrls: ['./list-demande-budget.component.css']
})
export class ListDemandeBudgetComponent implements OnInit {

  demandesBudget: DemandeBudget[];
  statutDemande: StatutDemande = new StatutDemande();
  type: Type = new Type();
  compagne: Compagne = new Compagne();
  constructor(private demandeBudgetService: DemandeBudgetService) {

  }

  ngOnInit() {
    this.demandeBudgetService.getAllDemandeBudget().subscribe(data => {
      this.demandesBudget = data;
    });
  }
  deletDemandeBudget(demandeBudget: DemandeBudget): void {
    console.log(this.demandeBudgetService);

    this.demandeBudgetService.deleteDemandeBudget(demandeBudget).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
