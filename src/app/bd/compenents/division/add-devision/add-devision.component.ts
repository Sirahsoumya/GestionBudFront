import { Component, OnInit } from '@angular/core';
import {Devision} from '../../../modules/Devision';
import {Router} from '@angular/router';
import {DivisionService} from '../../../services/division.service';

@Component({
  selector: 'app-add-devision',
  templateUrl: './add-devision.component.html',
  styleUrls: ['./add-devision.component.css']
})
export class AddDevisionComponent implements OnInit {
 division: Devision;

  constructor(private router: Router, private divisionService: DivisionService ) {
    this.division = new Devision();
  }

  ngOnInit() {
  }
  onSubmitDevision() {
    console.log(this.division);
    this.divisionService.saveDevision(this.division).subscribe(result => this.gotoListDevision());
  }

  gotoListDevision() {
  this.router.navigate(['/listDivision']);
}
}
