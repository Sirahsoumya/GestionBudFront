import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecetteService} from "../../../services/recette.service";
import {Type} from "../../../modules/Type";
import {Devision} from "../../../modules/Devision";

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.css']
})
export class UpdateRecetteComponent implements OnInit {
  recette: any;
  types: Type[];
  divisions: Devision[];
  type: Type;
  date: Date;
  division: Devision;
  constructor(private router: Router,private route: ActivatedRoute,private recetteService: RecetteService) {
    this.type = new Type();
    this.division = new Devision();
    this.date = new Date();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recetteService.findByIdRecette(id).subscribe(data => {
      this.recette = data;
    });
  }


  onSubmitUpdateRecette() {
    this.recetteService.updateRecette(this.recette).subscribe(result => this.gotoNewListRecette());
  }
  gotoNewListRecette() {
    this.router.navigate(['/listRecette']);
  }

}
