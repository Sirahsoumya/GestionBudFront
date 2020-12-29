import { Component, OnInit } from '@angular/core';
import {SponsorService} from "../../../services/sponsor.service";
import {Sponsor} from "../../../modules/Sponsor";
import {Programme} from "../../../modules/programme";
import {Projet} from "../../../modules/projet";
declare var $: any;
@Component({
  selector: 'app-list-sponsor',
  templateUrl: './list-sponsor.component.html',
  styleUrls: ['./list-sponsor.component.css']
})
export class ListSponsorComponent implements OnInit {
   sponsors: Sponsor[];
  idProjet: number;
  projet: Projet = new Projet();
  constructor(private sponsorService: SponsorService) { }

  ngOnInit() {
    this.sponsorService.getAllSponsor().subscribe(data => {
      this.sponsors = data;
    });
  }
  deletSponsor(sponsor: Sponsor): void {
    this.sponsorService.deleteSponsor(sponsor).subscribe((response) => {
      this.ngOnInit();
    });
  }

/*  search(): void {

    this.sponsorService.searchById(this.idProjet).subscribe(data => {
      console.log(data);
      this.sponsors = data;
    });
  }*/
  //moteur de recherche pour lister les sponsors d un projet
  search() {
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      $('#myInput').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('#Table tr').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  }
}
