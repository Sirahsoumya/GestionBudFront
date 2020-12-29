import { Component, OnInit } from '@angular/core';
import {Sponsor} from "../../../modules/Sponsor";
import {SponsorService} from "../../../services/sponsor.service";
import {Router} from "@angular/router";
import {IndicateurService} from "../../../services/indicateur.service";
import {ProjetService} from "../../../services/projet.service";
import {Projet} from "../../../modules/projet";

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {
   sponsor: Sponsor;
  projet: Projet;
  projets: Projet[];
  constructor(private sponsorService: SponsorService, private router: Router, private projetService: ProjetService) {
    this.sponsor = new Sponsor();
  }

  ngOnInit() {
    this.projetService.getAllProjet().subscribe(data => {
      this.projets = data;
    });
  }
  OnSubmitSponsor(){
    this.sponsorService.saveSponsor(this.sponsor).subscribe(result => this.gotoListSponsor());
  }
  gotoListSponsor(){
    this.router.navigate(['/listSponsor']);
  }
}
