import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RecetteService} from '../../../services/recette.service';
import {Recette} from '../../../modules/Recette';
import {Type} from '../../../modules/Type';
import {OrientationService} from '../../../services/orientation.service';
import {TypeService} from '../../../services/type.service';
import {Orientation} from '../../../modules/orientation';
import {DivisionService} from "../../../services/division.service";
import {Devision} from "../../../modules/Devision";

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent implements OnInit {
    recette: Recette;
  division: Devision;
  date: Date ;
    type: Type;
    types: Type[];
  divisions: Devision[];
  constructor(private router: Router, private recetteService: RecetteService, private typeService: TypeService,private  divisionService: DivisionService) {
    this.recette = new Recette ();
    this.type = new Type();
    this.division = new Devision();
    this.date = new Date();
  }
    ngOnInit(): void {
        this.typeService.getAllType().subscribe(data => {
            this.types = data;
        });
        this.divisionService.getAllDevision().subscribe(data => {
        this.divisions = data;
      });

    }

    onSubmitRecette() {
        console.log(this.recette);
        console.log(this.type);

        this.recetteService.saveRecette(this.recette).subscribe(result => this.gotoListRecette());
    }

    gotoListRecette() {
        this.router.navigate(['/listRecette']);
    }

}
