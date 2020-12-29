import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Marche} from "../../../modules/marche";
import {MarcheService} from "../../../services/marche.service";

@Component({
  selector: 'app-update-marche',
  templateUrl: './update-marche.component.html',
  styleUrls: ['./update-marche.component.css']
})
export class UpdateMarcheComponent implements OnInit {
 marche: any;
  constructor( private route: ActivatedRoute, private router: Router, private marcheService: MarcheService) {
    this.marche = new Marche();
  }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.marcheService.findByIdMarche(id).subscribe(data => {
    this.marche = data;
  });
}

onSubmitUpdateMarche() {
  this.marcheService.updateMarche(this.marche).subscribe(result => this.gotoNewListMarche());
}
  gotoNewListMarche() {
  this.router.navigate(['/listMarche']);
}


}
