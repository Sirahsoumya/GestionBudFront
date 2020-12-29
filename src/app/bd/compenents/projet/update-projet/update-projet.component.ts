import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MarcheService} from "../../../services/marche.service";
import {ProjetService} from "../../../services/projet.service";
import {SourcheBudget} from "../../../modules/SourceBudget";
import {Programme} from "../../../modules/programme";
import {Marche} from "../../../modules/marche";
import {Devision} from "../../../modules/Devision";
import {Perimetre} from "../../../modules/Perimetre";
import {StatutProjet} from "../../../modules/StatutProjet";

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {
projet: any;
  sourceBudgets: SourcheBudget[];
  programmes: Programme[];
  marches: Marche[];
  divisions: Devision[];
  perimetres: Perimetre[];
  statutProjets: StatutProjet[];
  constructor( private router: Router, private projetService: ProjetService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projetService.findByIdProjet(id).subscribe(data => {
      this.projet = data;
    });
  }


  OnSubmitUpdateProjet() {
    this.projetService.updatProjet(this.projet).subscribe(result => this.gotoNewListProjet());
  }
  gotoNewListProjet() {
    this.router.navigate(['/listProjet']);
  }

}
