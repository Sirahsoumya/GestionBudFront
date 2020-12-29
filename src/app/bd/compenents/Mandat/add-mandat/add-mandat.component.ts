import { Component, OnInit } from '@angular/core';
import {StatutProjet} from '../../../modules/StatutProjet';
import {Router} from '@angular/router';
import {StatutProjetService} from '../../../services/statut-projet.service';
import {Mandat} from '../../../modules/Mandat';
import {MandatService} from '../../../services/mandat.service';

@Component({
  selector: 'app-add-mandat',
  templateUrl: './add-mandat.component.html',
  styleUrls: ['./add-mandat.component.css']
})
export class AddMandatComponent implements OnInit {
  mandat: Mandat;
  constructor(private router: Router, private mandatService: MandatService) {
    this.mandat = new Mandat();
  }

  ngOnInit() {
  }
  onSubmitMandat() {
    this.mandatService.saveMandat(this.mandat).subscribe(result => this.gotoListMandat());
  }

  gotoListMandat() {
    this.router.navigate(['/listMandat']);
  }


}
