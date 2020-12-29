import { Component, OnInit } from '@angular/core';
import {StatutProjet} from "../../../modules/StatutProjet";
import {Router} from "@angular/router";
import {MarcheService} from "../../../services/marche.service";
import {StatutProjetService} from "../../../services/statut-projet.service";

@Component({
  selector: 'app-add-statut-projet',
  templateUrl: './add-statut-projet.component.html',
  styleUrls: ['./add-statut-projet.component.css']
})
export class AddStatutProjetComponent implements OnInit {
   statutProjet: StatutProjet;
  constructor(private router: Router,private statutService: StatutProjetService) {
    this.statutProjet = new StatutProjet();
  }

  ngOnInit() {
  }
  onSubmitStatut(){
    this.statutService.saveStatutP(this.statutProjet).subscribe(result => this.gotoListStatut());
  }

  gotoListStatut(){
    this.router.navigate(['/listStatut']);
  }

}
