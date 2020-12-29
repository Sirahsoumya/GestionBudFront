import { Component, OnInit } from '@angular/core';
import {SourceBudgetService} from "../../../services/source-budget.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcheBudget} from "../../../modules/SourceBudget";

@Component({
  selector: 'app-update-source-budget',
  templateUrl: './update-source-budget.component.html',
  styleUrls: ['./update-source-budget.component.css']
})
export class UpdateSourceBudgetComponent implements OnInit {
  sourceBudgetaire: any;
  constructor(private sourcheBudService: SourceBudgetService, private router: Router, private route: ActivatedRoute) {
    this.sourceBudgetaire = new SourcheBudget();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sourcheBudService.findByIdSourcheBudget(id).subscribe(data => {
      this.sourceBudgetaire = data;
    });
  }
  onSubmitUpdateSource() {
    this.sourcheBudService.updateSourcheBudget(this.sourceBudgetaire).subscribe(result => this.gotoNewListSource());
  }
  gotoNewListSource() {
    this.router.navigate(['/listSourceBudget']);
  }
}
