import { Component, OnInit } from '@angular/core';
import {Fonctionnaire} from '../../../modules/Fonctionnaire';
import {FonctionnaireService} from '../../../services/fonctionnaire.service';
import {Depense} from '../../../modules/Depense';
import {DepenseService} from '../../../services/depense.service';
import {Mandat} from "../../../modules/Mandat";
import {MandatService} from "../../../services/mandat.service";

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {

  depenses: Depense[];

  constructor(private depenseService: DepenseService) { }

  ngOnInit() {

    console.log(this.depenses);
    this.depenseService.getAllDepense().subscribe(data => {
      this.depenses = data;
    });
  }
  deleteDepense(depense: Depense): void {
    this.depenseService.deleteDepense(depense).subscribe((response) => {
      this.ngOnInit();
    });
  }


}
