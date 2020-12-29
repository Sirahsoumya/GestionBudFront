import { Component, OnInit } from '@angular/core';
import {Indicateur} from "../../../modules/Indicateur";
import {IndicateurService} from "../../../services/indicateur.service";


@Component({
  selector: 'app-list-indicateur',
  templateUrl: './list-indicateur.component.html',
  styleUrls: ['./list-indicateur.component.css']
})
export class ListIndicateurComponent implements OnInit {
  indicateurs: Indicateur[];
  indicateur: Indicateur;
  constructor( private indicateurService: IndicateurService ) {
    this.indicateur =  new Indicateur();
  }

  ngOnInit() {
    this.indicateurService.getAllIndicateur().subscribe(data => {
      this.indicateurs = data;
    });
  }
  deletIndicateur(indicateur: Indicateur): void {
    this.indicateurService.deleteIndicateur(indicateur).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
