import { Component, OnInit } from '@angular/core';
import {StatutProjet} from "../../../modules/StatutProjet";
import {StatutProjetService} from "../../../services/statut-projet.service";


@Component({
  selector: 'app-list-statut-projet',
  templateUrl: './list-statut-projet.component.html',
  styleUrls: ['./list-statut-projet.component.css']
})
export class ListStatutProjetComponent implements OnInit {
  statuts: StatutProjet[];
  statuProjet: StatutProjet;

  constructor(private statutService: StatutProjetService) { }

  ngOnInit() {
    this.statutService.getAllStatutP().subscribe(data => {
      this.statuts = data;
    });
  }
  deleteStatutProjet(statutProjet : StatutProjet): void{
    this.statutService.deleteStatutP(statutProjet).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
