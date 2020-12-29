import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DivisionService} from '../../../services/division.service';
import {Devision} from '../../../modules/Devision';
import {DepenseService} from '../../../services/depense.service';
import {Depense} from '../../../modules/Depense';
import {MandatService} from "../../../services/mandat.service";
import {Mandat} from "../../../modules/Mandat";

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.css']
})
export class AddDepenseComponent implements OnInit {

  depense: Depense;
  devision: Devision = new Devision();
  devisions: Devision[];
  mandats: Mandat[];
  constructor(private mandatService: MandatService, private devisionService: DivisionService, private router: Router, private depenseService: DepenseService) {
    this.devision = new Devision();
    this.depense = new Depense();
  }

  ngOnInit(): void {
    this.mandatService.getAllMandat().subscribe(data => {
      this.mandats = data;
    });
    this.devisionService.getAllDevision().subscribe(data => {
      this.devisions = data;
    });

  }
  onSubmitDepense() {
    console.log(this.depense);
    console.log(this.devision);
    this.depenseService.saveDepense(this.depense).subscribe(result => this.gotoListDepense());
  }
  gotoListDepense() {
    this.router.navigate(['/listDepense']);
  }

}
