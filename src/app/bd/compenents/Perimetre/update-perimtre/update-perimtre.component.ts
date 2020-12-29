import { Component, OnInit } from '@angular/core';
import {PerimetreService} from "../../../services/perimetre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Perimetre} from "../../../modules/Perimetre";

@Component({
  selector: 'app-update-perimtre',
  templateUrl: './update-perimtre.component.html',
  styleUrls: ['./update-perimtre.component.css']
})
export class UpdatePerimtreComponent implements OnInit {
  perimetre: any;
  constructor(private perimtrevice: PerimetreService, private router: Router,private route: ActivatedRoute) {
    this.perimetre = new Perimetre();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.perimtrevice.findByIdPerimetre(id).subscribe(data => {
      this.perimetre = data;
    });
  }


  onSubmitUpdatePerimtre() {
    this.perimtrevice.updatePerimetre(this.perimetre).subscribe(result => this.gotoNewListPerimetre());
  }
  gotoNewListPerimetre() {
    this.router.navigate(['/listPerimetre']);
  }


}
