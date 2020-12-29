import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SponsorService} from "../../../services/sponsor.service";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-update-sponsor',
  templateUrl: './update-sponsor.component.html',
  styleUrls: ['./update-sponsor.component.css']
})
export class UpdateSponsorComponent implements OnInit {
  sponsor: any;
  projets: Projet[];
  constructor(private router: Router, private route: ActivatedRoute, private sponsorService: SponsorService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sponsorService.findByIdSponsor(id).subscribe(data => {
      this.sponsor = data;
    });
  }


  OnSubmitUpdateSponsor() {
    this.sponsorService.updatSponsor(this.sponsor).subscribe(result => this.gotoNewListSponsor());
  }
  gotoNewListSponsor() {
    this.router.navigate(['/listSponsor']);
  }

}
