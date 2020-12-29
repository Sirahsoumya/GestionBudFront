import { Component, OnInit } from '@angular/core';
import {SourcheBudget} from "../../../modules/SourceBudget";
import {SourceBudgetService} from "../../../services/source-budget.service";


@Component({
  selector: 'app-list-sourche-budget',
  templateUrl: './list-sourche-budget.component.html',
  styleUrls: ['./list-sourche-budget.component.css']
})
export class ListSourcheBudgetComponent implements OnInit {
  sourceBudgetaires: SourcheBudget[];
  constructor(private sourceBudget: SourceBudgetService ) {

  }

  ngOnInit() {
    this.sourceBudget.getAllSource().subscribe(data => {
      this.sourceBudgetaires = data;
    });
  }
  deletSource(sourcheBudget: SourcheBudget): void {
    console.log("delete ca marche ou ps::");
    this.sourceBudget.deleteSource(sourcheBudget).subscribe((response) => {
      this.ngOnInit();
    });
  }


}
