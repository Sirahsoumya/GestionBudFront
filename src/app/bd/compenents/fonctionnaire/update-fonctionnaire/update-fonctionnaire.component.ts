import { Component, OnInit } from '@angular/core';
import {Projet} from "../../../modules/projet";
import {ActivatedRoute, Router} from "@angular/router";
import {FonctionnaireService} from "../../../services/fonctionnaire.service";
import {Fonctionnaire} from "../../../modules/Fonctionnaire";

@Component({
  selector: 'app-update-fonctionnaire',
  templateUrl: './update-fonctionnaire.component.html',
  styleUrls: ['./update-fonctionnaire.component.css']
})
export class UpdateFonctionnaireComponent implements OnInit {
  fonctionnaire: any;
  projets: Projet[];
  constructor(private router: Router, private fonctionnaireService: FonctionnaireService, private route: ActivatedRoute) {
    this.fonctionnaire = new Fonctionnaire();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fonctionnaireService.findByIdFonctionnaire(id).subscribe(data => {
      this.fonctionnaire = data;
    });
  }


  onSubmitUpdateFonctionnaire() {
    this.fonctionnaireService.updateFonctionnaire(this.fonctionnaire).subscribe(result => this.gotoNewListFonctionnaire());
  }
  gotoNewListFonctionnaire() {
    this.router.navigate(['/listFonctionnaire']);
  }

}
