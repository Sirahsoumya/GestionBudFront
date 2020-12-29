
import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../modules/projet';
import {Marche} from '../../../modules/marche';
import {MarcheService} from '../../../services/marche.service';
import {ProjetService} from '../../../services/projet.service';
import {Router} from '@angular/router';
import {ProgrammeService} from '../../../services/programme.service';
import {Programme} from '../../../modules/programme';
import {SourcheBudget} from '../../../modules/SourceBudget';
import {SourceBudgetService} from '../../../services/source-budget.service';
import {StatutProjet} from '../../../modules/StatutProjet';
import {Perimetre} from '../../../modules/Perimetre';

import {PerimetreService} from '../../../services/perimetre.service';
import {StatutProjetService} from '../../../services/statut-projet.service';
import {DivisionService} from '../../../services/division.service';
import {Devision} from '../../../modules/Devision';
import {DemandeBudgetService} from "../../../services/demande-budget.service";
import {DemandeBudget} from "../../../modules/DemandeBudget";


@Component({

  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  projet: Projet;
  projets: Projet[];
  marche: Marche;
  marches: Marche[];
  sourceBudget: SourcheBudget;
  sourceBudgets: SourcheBudget[];
  statutProjet: StatutProjet;
  statutProjets: StatutProjet[];
  perimetre: Perimetre;
  perimetres: Perimetre[];
  devision: Devision;
  divisions: Devision[];
  programmes: Programme[];
  programme: Programme;
  demandesBudgets: DemandeBudget[];
  demandesBudget: DemandeBudget;
  //idMarche: any;


  constructor(private demandeBudgetService: DemandeBudgetService, private sourceBudgetService: SourceBudgetService, private programmeService: ProgrammeService, private perimetreService: PerimetreService, private statutProjetService: StatutProjetService, private divisionService: DivisionService, private router: Router, private marcheService: MarcheService, private projetService: ProjetService) {
    this.projet = new Projet();
    this.programme = new Programme();
    this.marche = new Marche();
    this.sourceBudget = new SourcheBudget();
    this.statutProjet =  new StatutProjet();
    this.devision =  new Devision();
    this.perimetre = new Perimetre();
    this.demandesBudget = new DemandeBudget();
  }

  ngOnInit(): void {
    this.marcheService.getAllMarche().subscribe(data => {
      this.marches = data;
    });
    this.programmeService.getAllProgramme().subscribe(data => {
      this.programmes = data;
    });
    this.sourceBudgetService.getAllSource().subscribe(data => {
      this.sourceBudgets = data;
    });
    this.perimetreService.getAllPerimetre().subscribe(data => {
      this.perimetres = data;
    });
    this.statutProjetService.getAllStatutP().subscribe(data => {
      this.statutProjets = data;
    });
    this.divisionService.getAllDevision().subscribe(data => {
      this.divisions = data;
    });
    this.demandeBudgetService.getAllDemandeBudget().subscribe(data => {
      this.demandesBudgets = data;
    });
  }
  OnSubmitProjet() {

    console.log(this.projet);
    this.projetService.saveProjet(this.projet).subscribe(result => this.gotoListProjet());

  }
  gotoListProjet() {
    this.router.navigate(['/listProjet']);
  }

}
