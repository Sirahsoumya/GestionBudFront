import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StatutProjetService} from "../../../services/statut-projet.service";
import {StatutProjet} from "../../../modules/StatutProjet";

@Component({
  selector: 'app-update-statut-projet',
  templateUrl: './update-statut-projet.component.html',
  styleUrls: ['./update-statut-projet.component.css']
})
export class UpdateStatutProjetComponent implements OnInit {
  statutProjet: any;

  constructor( private router: Router, private route: ActivatedRoute, private statutService: StatutProjetService) {
    this.statutProjet = new StatutProjet();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.statutService.findByIdStatut(id).subscribe(data => {
      this.statutProjet = data;
    });
  }
  onSubmitUpdateStatut() {
    this.statutService.updateStatut(this.statutProjet).subscribe(result => this.gotoNewListStatut());
  }
  gotoNewListStatut() {
    this.router.navigate(['/listStatut']);
  }


}
