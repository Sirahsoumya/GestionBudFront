import { Component, OnInit } from '@angular/core';
import {Fonctionnaire} from "../../../modules/Fonctionnaire";
import {FonctionnaireService} from "../../../services/fonctionnaire.service";
import {Marche} from "../../../modules/marche";

@Component({
  selector: 'app-list-fonctionnaire',
  templateUrl: './list-fonctionnaire.component.html',
  styleUrls: ['./list-fonctionnaire.component.css']
})
export class ListFonctionnaireComponent implements OnInit {
  fonctionnaires: Fonctionnaire[];

  constructor(private fonctionnaireService: FonctionnaireService) { }

  ngOnInit() {
    console.log(this.fonctionnaires);
    this.fonctionnaireService.getAllFonctionnaire().subscribe(data => {
      this.fonctionnaires = data;
    });
  }
  deletFonctionnaire(fonctionnaire: Fonctionnaire): void{
    this.fonctionnaireService.deleteFonctionnaire(fonctionnaire).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
