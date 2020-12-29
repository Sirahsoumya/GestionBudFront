import { Component, OnInit } from '@angular/core';

import {MandatService} from '../../../services/mandat.service';
import {Mandat} from '../../../modules/Mandat';

@Component({
  selector: 'app-list-mandat',
  templateUrl: './list-mandat.component.html',
  styleUrls: ['./list-mandat.component.css']
})
export class ListMandatComponent implements OnInit {

  mandats: Mandat[];
  mandat: Mandat = new Mandat();

  constructor(private mandatService: MandatService) {
  }

  ngOnInit() {
    this.mandatService.getAllMandat().subscribe(data => {
      this.mandats = data;
    });
  }

  deletMandat(mandat: Mandat): void {
    this.mandatService.deleteMandat(mandat).subscribe((response) => {
      this.ngOnInit();
    });
  }
}
