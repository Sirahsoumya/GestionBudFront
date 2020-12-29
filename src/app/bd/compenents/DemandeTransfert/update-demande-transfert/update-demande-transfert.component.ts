import { Component, OnInit } from '@angular/core';
import {DemandeTransfertService} from "../../../services/demande-transfert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatutDemande} from "../../../modules/StatutDemande";
import {DemandeTransfert} from "../../../modules/DemandeTransfert";
import {Devision} from "../../../modules/Devision";
import {StatutDemandeService} from "../../../services/statut-demande.service";
import {DivisionService} from "../../../services/division.service";

@Component({
  selector: 'app-update-demande-transfert',
  templateUrl: './update-demande-transfert.component.html',
  styleUrls: ['./update-demande-transfert.component.css']
})
export class UpdateDemandeTransfertComponent implements OnInit {
  demandeTransfert: any;
  divisions: Devision[];
  statutDemandes: StatutDemande[];
  constructor(private demandeTransfertService: DemandeTransfertService, private router: Router,private route: ActivatedRoute, private  divisionService: DivisionService) {
    this.demandeTransfert = new DemandeTransfert();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.demandeTransfertService.findByIdDemandeTransfert(id).subscribe(data => {
      this.demandeTransfert = data;
    });
  }

  onSubmitUpdateDemandeTransfert() {
    this.demandeTransfertService.updateDemandeTransfert(this.demandeTransfert).subscribe(result => this.gotoNewListDemandeTransfert());
  }
  gotoNewListDemandeTransfert() {
    this.router.navigate(['/listDemandeTransfert']);
  }

}
