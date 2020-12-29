import { Component, OnInit } from '@angular/core';
import {Perimetre} from "../../../modules/Perimetre";
import {PerimetreService} from "../../../services/perimetre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-perimetre',
  templateUrl: './add-perimetre.component.html',
  styleUrls: ['./add-perimetre.component.css']
})
export class AddPerimetreComponent implements OnInit {
  perimetre: Perimetre;

  constructor(private perimtrevice: PerimetreService, private router: Router) {
    this.perimetre = new Perimetre();
  }

  ngOnInit() {
  }
  onSubmitPerimtre() {
    console.log(this.perimetre.idPerimetre);
    this.perimtrevice.savePerimetre(this.perimetre).subscribe(result => this.gotoListPerimetre());

  }
  gotoListPerimetre(){
    this.router.navigate(['/listPerimetre']);
  }

}
