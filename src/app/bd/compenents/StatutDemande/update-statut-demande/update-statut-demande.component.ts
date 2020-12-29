import { Component, OnInit } from '@angular/core';
import {StatutDemandeService} from "../../../services/statut-demande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatutDemande} from "../../../modules/StatutDemande";

@Component({
  selector: 'app-update-statut-demande',
  templateUrl: './update-statut-demande.component.html',
  styleUrls: ['./update-statut-demande.component.css']
})
export class UpdateStatutDemandeComponent implements OnInit {
  statutDemande: any;
  constructor(private statutDemandeService: StatutDemandeService, private route: ActivatedRoute, private router: Router) {
    this.statutDemande = new StatutDemande();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.statutDemandeService.findByIdStatutDemande(id).subscribe(data => {
      this.statutDemande = data;
    });
  }
  onSubmitUpdateStatutDemande() {
    this.statutDemandeService.updateStatutDemande(this.statutDemande).subscribe(result => this.gotoNewListStatutDemande());
  }
  gotoNewListStatutDemande() {
    this.router.navigate(['/listStatutDemande']);
  }

}
