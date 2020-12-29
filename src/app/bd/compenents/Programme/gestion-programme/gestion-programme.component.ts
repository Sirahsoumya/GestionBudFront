import { Component, OnInit } from '@angular/core';
import {Programme} from "../../../modules/programme";
import {OrientationService} from "../../../services/orientation.service";
import {Router} from "@angular/router";
import {ProgrammeService} from "../../../services/programme.service";
import {Orientation} from "../../../modules/orientation";

@Component({
  selector: 'app-gestion-programme',
  templateUrl: './gestion-programme.component.html',
  styleUrls: ['./gestion-programme.component.css']
})
export class GestionProgrammeComponent implements OnInit {
   programme: Programme;
   orientation: Orientation= new Orientation();
   orientations: Orientation[];
  constructor(private programmeService: ProgrammeService, private router: Router, private orientationService: OrientationService) {
    this.programme= new Programme();
    this.orientation= new Orientation();
  }

  ngOnInit(): void{
    console.log("getting orientation or not!!");
    this.orientationService.getAllOrientation().subscribe(data => {
      this.orientations = data;
    });

  }
  onSubmitProgramme() {
    console.log('test !!');
    console.log(this.programme);
    console.log(this.orientation);
    this.programmeService.saveProgramme(this.programme).subscribe(result => this.gotoListProgramme());
  }
  gotoListProgramme(){
    this.router.navigate(['/listProgramme']);
  }
}
