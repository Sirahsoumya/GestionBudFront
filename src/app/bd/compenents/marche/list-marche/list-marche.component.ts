import { Component, OnInit } from '@angular/core';
import {Marche} from "../../../modules/marche";
import {MarcheService} from "../../../services/marche.service";

@Component({
  selector: 'app-list-marche',
  templateUrl: './list-marche.component.html',
  styleUrls: ['./list-marche.component.css']
})
export class ListMarcheComponent implements OnInit {
  marches : Marche[];
  marche : Marche = new Marche();

  constructor(private marcheService: MarcheService) { }

  ngOnInit() {
    this.marcheService.getAllMarche().subscribe(data => {
      this.marches = data;
    });
  }
  deletMarche(marche : Marche): void{
    this.marcheService.deleteMarche(marche).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
