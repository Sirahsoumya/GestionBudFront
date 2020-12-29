import { Component, OnInit } from '@angular/core';
import {DepenseService} from "../../../services/depense.service";
import {Depense} from "../../../modules/Depense";
import {Projet} from "../../../modules/projet";
import {ProjetService} from "../../../services/projet.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  //depenses: Depense[];
  projets: Projet[];

  constructor(private projetService: ProjetService ) { }

  ngOnInit() {
    /*console.log(this.depenses);
    this.depenseService.getAllDepense().subscribe(data => {
      this.depenses = data;*/
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
      console.log(data);

      this.barChartLabels = this.projets.map(x => x.libelle);
      this.barChartData = [
        {data: this.projets.map(y => y.etatAvancementReelle), label: 'Etat d anvancement réelle'},
        {data: this.projets.map(y => y.etatAvancementTheorique), label: 'Etat d anvancement théorique'}
      ];
    });
  }

}
