import { Component, OnInit } from '@angular/core';
import {MandatService} from "../../../services/mandat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Depense} from "../../../modules/Depense";
import {DepenseService} from "../../../services/depense.service";
import {Devision} from "../../../modules/Devision";

@Component({
  selector: 'app-update-depense',
  templateUrl: './update-depense.component.html',
  styleUrls: ['./update-depense.component.css']
})
export class UpdateDepenseComponent implements OnInit {
depense: any;
  devisions: Devision[];
  constructor(private route: ActivatedRoute, private router: Router, private depenseService: DepenseService) {
    this.depense = new Depense();
  }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.depenseService.findByIdDepense(id).subscribe(data => {
    this.depense = data;
  });
}

  onSubmitUpdateDepense() {
  this.depenseService.updateDepense(this.depense).subscribe(result => this.gotoNewListDepense());
}
  gotoNewListDepense() {
  this.router.navigate(['/listDepense']);
}


}
