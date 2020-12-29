import { Component, OnInit } from '@angular/core';
import {Orientation} from '../../../modules/orientation';
import {OrientationService} from '../../../services/orientation.service';
import {StatutDemande} from '../../../modules/StatutDemande';
import {StatutDemandeService} from '../../../services/statut-demande.service';

@Component({
  selector: 'app-list-statut-demande',
  templateUrl: './list-statut-demande.component.html',
  styleUrls: ['./list-statut-demande.component.css']
})
export class ListStatutDemandeComponent implements OnInit {

  statutDemandes: StatutDemande[];
  constructor(private statutDemandeService: StatutDemandeService) { }

  ngOnInit() {
    this.statutDemandeService.getAllStatutDemande().subscribe(data => {
      this.statutDemandes = data;
    });
  }
  deleteStatutDemande(statutDemande: StatutDemande): void {

    this.statutDemandeService.deleteStatutDemande(statutDemande).subscribe((response) => {
      this.ngOnInit();
    });
  }


}
