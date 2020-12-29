import { Component, OnInit } from '@angular/core';
import {CompagneService} from "../../../services/compagne.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-compagne',
  templateUrl: './update-compagne.component.html',
  styleUrls: ['./update-compagne.component.css']
})
export class UpdateCompagneComponent implements OnInit {
  compagne: any;
  constructor(private compagneService: CompagneService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.compagneService.findByIdCompagne(id).subscribe(data => {
      this.compagne = data;
    });
  }

  onSubmitUpdateCompagne() {
    this.compagneService.updateCompagne(this.compagne).subscribe(result => this.gotoNewListCompagne());
  }
  gotoNewListCompagne() {
    this.router.navigate(['/listCompagne']);
  }


}
