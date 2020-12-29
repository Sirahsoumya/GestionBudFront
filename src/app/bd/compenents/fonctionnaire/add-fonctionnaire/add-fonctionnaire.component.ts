import { Component, OnInit } from '@angular/core';
import {Fonctionnaire} from "../../../modules/Fonctionnaire";
import {Router} from "@angular/router";
import {FonctionnaireService} from "../../../services/fonctionnaire.service";
import {ProjetService} from "../../../services/projet.service";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-add-fonctionnaire',
  templateUrl: './add-fonctionnaire.component.html',
  styleUrls: ['./add-fonctionnaire.component.css']
})
export class AddFonctionnaireComponent implements OnInit {
   fonctionnaire: Fonctionnaire;
   projets: Projet[];
  constructor(private router: Router, private fonctionnaireService: FonctionnaireService, private projetService: ProjetService) {
    this.fonctionnaire = new Fonctionnaire();
  }

  ngOnInit() {
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
    });
  }
  onSubmitFonctionnaire() {
    this.fonctionnaireService.saveFonctionnaire(this.fonctionnaire).subscribe(result => this.gotoListFonctionnaire());
  }

  gotoListFonctionnaire() {
    this.router.navigate(['/listFonctionnaire']);
  }


}
