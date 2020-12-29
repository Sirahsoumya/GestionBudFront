import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IndicateurService} from "../../../services/indicateur.service";
import {Indicateur} from "../../../modules/Indicateur";
import {Projet} from "../../../modules/projet";
import {ProjetService} from "../../../services/projet.service";

@Component({
  selector: 'app-add-indicateur',
  templateUrl: './add-indicateur.component.html',
  styleUrls: ['./add-indicateur.component.css']
})
export class AddIndicateurComponent implements OnInit {
    projet: Projet;
    projets: Projet[];
   indicateur: Indicateur;
  constructor(private router: Router, private indicateurService: IndicateurService, private projetService: ProjetService) {
    this.indicateur = new Indicateur();
  }
  ngOnInit() {
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
    });
  }
  onSubmitIndicateur() {
    this.indicateurService.saveIndicateur(this.indicateur).subscribe(result => this.gotoListIndicateur());
  }
  gotoListIndicateur(){
    this.router.navigate(['/listIndicateur']);
  }

}
