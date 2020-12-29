import { Component, OnInit } from '@angular/core';
import {OrientationService} from "../../../services/orientation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Orientation} from "../../../modules/orientation";

@Component({
  selector: 'app-update-orientation',
  templateUrl: './update-orientation.component.html',
  styleUrls: ['./update-orientation.component.css']
})
export class UpdateOrientationComponent implements OnInit {
  orientation: any;
  constructor(private orientationService : OrientationService, private router: Router,private route: ActivatedRoute) {
    this.orientation = new Orientation();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orientationService.findByIdOrientation(id).subscribe(data => {
      this.orientation = data;
    });
  }
  onSubmitUpdateOrientation() {
    this.orientationService.updateOrientation(this.orientation).subscribe(result => this.gotoNewListOrientation());
  }
  gotoNewListOrientation() {
    this.router.navigate(['/listOrientation']);
  }

}
