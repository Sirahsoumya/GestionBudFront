import { Component, OnInit } from '@angular/core';
import {PartenaireService} from "../../../services/partenaire.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Partenaire} from "../../../modules/Partenaire";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {
  partenaire: any;
  projets: Projet[];
  constructor( private partenaireService: PartenaireService, private router: Router, private route: ActivatedRoute) {
    this.partenaire = new Partenaire();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.partenaireService.findByIdPartenaire(id).subscribe(data => {
      this.partenaire = data;
    });
  }


  onSubmitUpdatePartenaire() {
    this.partenaireService.updatPartenaire(this.partenaire).subscribe(result => this.gotoNewListPartenaire());
  }
  gotoNewListPartenaire() {
    this.router.navigate(['/listPartenaire']);
  }

}
