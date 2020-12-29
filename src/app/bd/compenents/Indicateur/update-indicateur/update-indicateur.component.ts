import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IndicateurService} from "../../../services/indicateur.service";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-update-indicateur',
  templateUrl: './update-indicateur.component.html',
  styleUrls: ['./update-indicateur.component.css']
})
export class UpdateIndicateurComponent implements OnInit {
  indicateur: any;
  projets: Projet[];
  constructor(private router: Router, private indicateurService: IndicateurService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.indicateurService.findByIdIndicateur(id).subscribe(data => {
      this.indicateur= data;
    });
  }


  onSubmitIndicateur() {
    this.indicateurService.updateIndicateur(this.indicateur).subscribe(result => this.gotoNewListIndicateur());
  }
  gotoNewListIndicateur() {
    this.router.navigate(['/listIndicateur']);
  }


}
