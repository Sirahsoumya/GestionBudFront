import { Component, OnInit } from '@angular/core';
import {CompagneService} from '../../../services/compagne.service';
import {Compagne} from '../../../modules/Compagne';

@Component({
  selector: 'app-list-compagne',
  templateUrl: './list-compagne.component.html',
  styleUrls: ['./list-compagne.component.css']
})
export class ListCompagneComponent implements OnInit {

  compagnes: Compagne[];
  constructor(private compagneService: CompagneService) { }

  ngOnInit() {
    this.compagneService.getAllCompagne().subscribe(data => {
      this.compagnes = data;
    });
  }
  deleteCompagne(compagne: Compagne): void {
    this.compagneService.deleteCompagne(compagne).subscribe((response) => {
      this.ngOnInit();
    });
  }
}
