import { Component, OnInit } from '@angular/core';

import {Orientation} from "../../../modules/orientation";
import {OrientationService} from "../../../services/orientation.service";



@Component({
  selector: 'app-list-orientation',
  templateUrl: './list-orientation.component.html',
  styleUrls: ['./list-orientation.component.css']
})
export class ListOrientationComponent implements OnInit {
  orientations: Orientation[];
  constructor(private orientationService: OrientationService) { }

  ngOnInit() {
    this.orientationService.getAllOrientation().subscribe(data => {
      this.orientations = data;
    });
  }
  deleteOrientation(orientation: Orientation): void {
    console.log("cc");
    this.orientationService.deleteOrient(orientation).subscribe((response) => {
      this.ngOnInit();
    });
  }

}
