import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../services/projet.service';
import {Projet} from '../../../modules/projet';
import {Marche} from '../../../modules/marche';
import {Programme} from '../../../modules/programme';
import {StatutProjet} from '../../../modules/StatutProjet';
import {Devision} from '../../../modules/Devision';
import {Perimetre} from '../../../modules/Perimetre';
import {SourcheBudget} from '../../../modules/SourceBudget';
import {DemandeBudget} from "../../../modules/DemandeBudget";
//import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {
  // var: any;
  projets: Projet[];
  projet: Projet;
  marche: Marche = new Marche();
  programme: Programme = new Programme();
  statutProjet: StatutProjet = new StatutProjet();
  devision: Devision = new Devision();
  perimetre: Perimetre = new Perimetre();
  sourceBudget: SourcheBudget = new SourcheBudget();
  demandeBudget: DemandeBudget = new DemandeBudget();
  constructor(private projetService: ProjetService) {
    this.projet = new Projet();
  }

  ngOnInit() {
    console.log(this.projet.sourceBudget.idSourceBudget);

    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
      console.log(data);
    });
  }
  deleteProjet(projet: Projet): void {
     console.log(projet);
     this.projetService.deleteProjet(projet).subscribe((response) => {
      this.ngOnInit();
    });
  }

  //pour lister les projets en retard
  listeRetaretedProject() {
    console.log('liste des projet en retard ts');
    this.projetService.getRetartedProjet().subscribe(data => {
      this.projets = data;
    });
  }
  //moteur de recherche
  myFunction() {
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      $('#myInput').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('#Table tr').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  }

}
