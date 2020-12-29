import { Component, OnInit } from '@angular/core';
import {Partenaire} from "../../../modules/Partenaire";
import {PartenaireService} from "../../../services/partenaire.service";
import {Router} from "@angular/router";
import {IndicateurService} from "../../../services/indicateur.service";
import {ProjetService} from "../../../services/projet.service";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-add-partenaire',
  templateUrl: './add-partenaire.component.html',
  styleUrls: ['./add-partenaire.component.css']
})
export class AddPartenaireComponent implements OnInit {
  partenaire: Partenaire;
  projet: Projet;
  projets: Projet[];
  constructor( private partenaireService: PartenaireService, private router: Router, private projetService: ProjetService) {
    this.partenaire = new Partenaire();
  }

  ngOnInit() {
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
    });
  }
  onSubmitPartenaire() {
    console.log('test !!');
    this.partenaireService.savePartenaire(this.partenaire).subscribe(result => this.gotoListPartenaire());
  }
  gotoListPartenaire(){
    this.router.navigate(['/listPartenaire']);
  }

}
