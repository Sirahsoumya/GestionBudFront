import { Component, OnInit } from '@angular/core';
import {DivisionService} from "../../../services/division.service";
import {Devision} from '../../../modules/Devision';


@Component({
  selector: 'app-list-devision',
  templateUrl: './list-devision.component.html',
  styleUrls: ['./list-devision.component.css']
})
export class ListDevisionComponent implements OnInit {
  divisions: Devision[];
  division: Devision;

  constructor(private  divisionService: DivisionService) { }

  ngOnInit() {
    console.log(this.division);
    this.divisionService.getAllDevision().subscribe(data => {
      this.divisions = data;
    });
  }
  deleteDevision(division: Devision): void {
    this.divisionService.deleteDevision(division).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
