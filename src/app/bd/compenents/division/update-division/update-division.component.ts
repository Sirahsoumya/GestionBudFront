import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DivisionService} from "../../../services/division.service";
import {Devision} from "../../../modules/Devision";

@Component({
  selector: 'app-update-division',
  templateUrl: './update-division.component.html',
  styleUrls: ['./update-division.component.css']
})
export class UpdateDivisionComponent implements OnInit {
  division: any;
  constructor(private router: Router, private divisionService: DivisionService ,private route: ActivatedRoute) {
    this.division = new Devision();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.divisionService.findByIdDivision(id).subscribe(data => {
      this.division = data;
    });
  }


  onSubmitUpdateDevision() {
    this.divisionService.updateDivision(this.division).subscribe(result => this.gotoNewListDemande());
  }
  gotoNewListDemande() {
    this.router.navigate(['/listDivision']);
  }

}
