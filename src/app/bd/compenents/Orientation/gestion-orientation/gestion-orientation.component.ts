import { Component, OnInit } from '@angular/core';

import {Orientation} from "../../../modules/orientation";
import {Router} from "@angular/router";
import {OrientationService} from "../../../services/orientation.service";



@Component({
  selector: 'app-gestion-orientation',
  templateUrl: './gestion-orientation.component.html',
  styleUrls: ['./gestion-orientation.component.css']
})
export class GestionOrientationComponent implements OnInit {
  orientation : Orientation= new Orientation();

  constructor(private orientationService : OrientationService, private router: Router) {
    this.orientation = new Orientation();

  }
  ngOnInit(): void {
  }

  onSubmitOrientation() {
  console.log('onSubmitOrientation test !!');
  console.log(this.orientation);

  this.orientationService.saveOrientation(this.orientation).subscribe(result => this.gotoOrientationGet());

 }
  gotoOrientationGet(){
  this.router.navigate(['/listOrientation']);

}


}
