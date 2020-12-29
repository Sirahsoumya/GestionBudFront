import { Component, OnInit } from '@angular/core';
import {Perimetre} from "../../../modules/Perimetre";
import {PerimetreService} from "../../../services/perimetre.service";
import {Programme} from "../../../modules/programme";

@Component({
  selector: 'app-list-perimetre',
  templateUrl: './list-perimetre.component.html',
  styleUrls: ['./list-perimetre.component.css']
})
export class ListPerimetreComponent implements OnInit {
  perimetres: Perimetre[];
  perimetre: Perimetre;

  constructor(private perimetreService: PerimetreService) {
    this.perimetre = new Perimetre();
  }

  ngOnInit() {
    this.perimetreService.getAllPerimetre().subscribe(data => {
      this.perimetres = data;
    });
  }
  delPerimetre(perimetre: Perimetre): void {
    this.perimetreService.deletePerimetre(perimetre).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
