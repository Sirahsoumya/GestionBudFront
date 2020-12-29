import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MarcheService} from "../../../services/marche.service";
import {ProjetService} from "../../../services/projet.service";
import {Projet} from "../../../modules/projet";
import {Marche} from "../../../modules/marche";
import {ProgrammeService} from "../../../services/programme.service";

@Component({
  selector: 'app-add-marche',
  templateUrl: './add-marche.component.html',
  styleUrls: ['./add-marche.component.css']
})
export class AddMarcheComponent implements OnInit {
  marche: Marche;


  constructor(private router: Router,private marcheService: MarcheService) {
    this.marche= new Marche();
  }

  ngOnInit() {
  }
  onSubmitMarche(){
    this.marcheService.saveMarche(this.marche).subscribe(result => this.gotoListMarche());
  }

  gotoListMarche(){
    this.router.navigate(['/listMarche']);
  }

}
