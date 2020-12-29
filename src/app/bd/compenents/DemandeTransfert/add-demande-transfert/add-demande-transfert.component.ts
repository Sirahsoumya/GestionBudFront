import { Component, OnInit } from '@angular/core';
import {Programme} from '../../../modules/programme';
import {Orientation} from '../../../modules/orientation';
import {ProgrammeService} from '../../../services/programme.service';
import {Router} from '@angular/router';
import {OrientationService} from '../../../services/orientation.service';
import {DemandeTransfert} from '../../../modules/DemandeTransfert';
import {StatutDemande} from '../../../modules/StatutDemande';
import {DemandeTransfertService} from '../../../services/demande-transfert.service';
import {StatutDemandeService} from '../../../services/statut-demande.service';
import {DivisionService} from "../../../services/division.service";
import {Devision} from "../../../modules/Devision";

@Component({
  selector: 'app-add-demande-transfert',
  templateUrl: './add-demande-transfert.component.html',
  styleUrls: ['./add-demande-transfert.component.css']
})
export class AddDemandeTransfertComponent implements OnInit {
  divisions: Devision[];
  demandeTransfert: DemandeTransfert;
  statutDemande: StatutDemande = new StatutDemande();
  statutDemandes: StatutDemande[];
  constructor(private demandeTransfertService: DemandeTransfertService, private router: Router, private statutDemandeService: StatutDemandeService, private  divisionService: DivisionService) {
    this.statutDemande = new StatutDemande();
    this.demandeTransfert = new DemandeTransfert();
  }

  ngOnInit(): void {
    this.statutDemandeService.getAllStatutDemande().subscribe(data => {
      this.statutDemandes = data;
    });
    this.divisionService.getAllDevision().subscribe(data => {
      this.divisions = data;
    });

  }
  onSubmitDemandeTransfert() {
    console.log(this.demandeTransfert);
    console.log(this.statutDemande);
    this.demandeTransfertService.saveDemandeTransfert(this.demandeTransfert).subscribe(result => this.gotoListDemandeTransfert());
  }
  gotoListDemandeTransfert() {
    this.router.navigate(['/listDemandeTransfert']);
  }

}
