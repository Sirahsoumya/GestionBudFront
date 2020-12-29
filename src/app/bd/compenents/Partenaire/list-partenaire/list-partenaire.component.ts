import { Component, OnInit } from '@angular/core';
import {Partenaire} from "../../../modules/Partenaire";
import {PartenaireService} from "../../../services/partenaire.service";
import {Programme} from "../../../modules/programme";

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.css']
})
export class ListPartenaireComponent implements OnInit {
  partenaires: Partenaire[];

  constructor(private partenaireService: PartenaireService) { }

  ngOnInit() {
    this.partenaireService.getAllPartenaire().subscribe(data => {
      this.partenaires = data;
    });
  }
  deletPartenaire(partenaire: Partenaire): void {
    console.log("entrer ou pas");
    this.partenaireService.deletePartenaire(partenaire).subscribe((response) => {
      this.ngOnInit();
    });


}

}
