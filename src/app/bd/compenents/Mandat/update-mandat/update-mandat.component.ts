import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MandatService} from "../../../services/mandat.service";

@Component({
  selector: 'app-update-mandat',
  templateUrl: './update-mandat.component.html',
  styleUrls: ['./update-mandat.component.css']
})
export class UpdateMandatComponent implements OnInit {
mandat: any;
  constructor(private router: Router, private mandatService: MandatService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mandatService.findByIdMandat(id).subscribe(data => {
      this.mandat = data;
    });
  }

  onSubmitUpdateMandat() {
    this.mandatService.updateMandat(this.mandat).subscribe(result => this.gotoNewListMandat());
  }
  gotoNewListMandat() {
    this.router.navigate(['/listMandat']);
  }

}
