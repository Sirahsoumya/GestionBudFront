import { Component, OnInit } from '@angular/core';
import {DemandeTransfertService} from '../../../services/demande-transfert.service';
import {DemandeTransfert} from '../../../modules/DemandeTransfert';
import {StatutDemande} from '../../../modules/StatutDemande';

@Component({
  selector: 'app-list-demande-transfert',
  templateUrl: './list-demande-transfert.component.html',
  styleUrls: ['./list-demande-transfert.component.css']
})
export class ListDemandeTransfertComponent implements OnInit {

  demandesTransfert: DemandeTransfert[];
  statutDemande: StatutDemande = new StatutDemande();
  demande: DemandeTransfert;
  constructor(private demandeTransferService: DemandeTransfertService) {

  }

  ngOnInit() {

    this.demandeTransferService.getAllDemandeTransfert().subscribe(data => {
      this.demandesTransfert = data;
    });
  }
  deleteDemandeTransfert(demandeTransfer: DemandeTransfert): void {

    console.log('delete front ca marche ou pas');
    this.demandeTransferService.deleteDemandeTransfert(demandeTransfer).subscribe((response) => {
      this.ngOnInit();
    });
  }

}

