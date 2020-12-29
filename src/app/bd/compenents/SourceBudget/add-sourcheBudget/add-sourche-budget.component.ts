import { Component, OnInit } from '@angular/core';
import {SourcheBudget} from '../../../modules/SourceBudget';
import {Router} from '@angular/router';
import {SourceBudgetService} from '../../../services/source-budget.service';

@Component({
  selector: 'app-add-sourche-budget',
  templateUrl: './add-sourche-budget.component.html',
  styleUrls: ['./add-sourche-budget.component.css']
})
export class AddSourcheBudgetComponent implements OnInit {
  sourceBudgetaire: SourcheBudget;
  sourceBudgetaires: SourcheBudget[];
  constructor(private sourcheBudService: SourceBudgetService, private router: Router) {
    this.sourceBudgetaire = new SourcheBudget();
  }

  ngOnInit() {
    }
  onSubmitSource() {
    this.sourcheBudService.saveSource(this.sourceBudgetaire).subscribe(result => this.gotoListSource());
  }
  gotoListSource(){
    this.router.navigate(['/listSourceBudget']);
  }

}
