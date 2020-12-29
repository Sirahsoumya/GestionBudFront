import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from "../../../services/programme.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Orientation} from "../../../modules/orientation";

@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrls: ['./update-programme.component.css']
})
export class UpdateProgrammeComponent implements OnInit {
  programme: any;
  orientations: Orientation[];
  constructor(private programmeService: ProgrammeService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.programmeService.findByIdProgramme(id).subscribe(data => {
      this.programme = data;
    });
  }
  onSubmitUpdateProgramme() {
    this.programmeService.updateProgramme(this.programme).subscribe(result => this.gotoNewListProgramme());
  }
  gotoNewListProgramme() {
    this.router.navigate(['/listProgramme']);
  }

}
