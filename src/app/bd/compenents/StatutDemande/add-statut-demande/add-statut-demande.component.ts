import { Component, OnInit } from '@angular/core';
import {Orientation} from '../../../modules/orientation';
import {OrientationService} from '../../../services/orientation.service';
import {Router} from '@angular/router';
import {StatutDemande} from '../../../modules/StatutDemande';
import {StatutDemandeService} from '../../../services/statut-demande.service';

@Component({
  selector: 'app-add-statut-demande',
  templateUrl: './add-statut-demande.component.html',
  styleUrls: ['./add-statut-demande.component.css']
})
export class AddStatutDemandeComponent implements OnInit {
  statutDemande: StatutDemande;

  constructor(private statutDemandeService: StatutDemandeService, private router: Router) {
    this.statutDemande = new StatutDemande();

  }
  ngOnInit(): void {
  }

  onSubmitStatutDemande() {
    console.log(this.statutDemande);

    this.statutDemandeService.saveStatutDemande(this.statutDemande).subscribe(result => this.gotoStatutDemande());

  }
  gotoStatutDemande()
  {
  this.router.navigate(['/listStatutDemande']);

  }

}
