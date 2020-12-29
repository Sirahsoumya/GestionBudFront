import { Component, OnInit } from '@angular/core';
import {Programme} from "../../../modules/programme";
import {ProgrammeService} from "../../../services/programme.service";
import {Orientation} from "../../../modules/orientation";

@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.css']
})
export class ListProgrammeComponent implements OnInit {
  programmes: Programme[];
  orientation: Orientation= new Orientation();

  constructor(private programmeService: ProgrammeService) {

  }

  ngOnInit() {
     this.programmeService.getAllProgramme().subscribe(data => {
      this.programmes = data;
    });
  }
  deletProgramme(programme: Programme): void {
    console.log("delete Programme ca marche ou ps::");
    console.log(this.programmeService);
    this.programmeService.deleteProgramme(programme).subscribe((response) => {
      console.log("programme supprimeé!!");
      this.ngOnInit();
    });
  }

}
