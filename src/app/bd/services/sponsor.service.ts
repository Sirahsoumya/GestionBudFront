import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Marche} from "../modules/marche";
import {Sponsor} from "../modules/Sponsor";
import {Projet} from "../modules/projet";

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsorUrl: string;
  constructor(private http: HttpClient) {
    this.sponsorUrl = 'http://localhost:8081/sponsors';
  }
  public getAllSponsor(): Observable<Sponsor[]> {
    console.log('getSponsor ca marche??');
    return this.http.get<Sponsor[]>(this.sponsorUrl + '/all');
  }
  public saveSponsor(sponsor: Sponsor) {
    return this.http.post<Sponsor>(this.sponsorUrl + '/save', sponsor);
  }
  public deleteSponsor(sponsor: Sponsor) {
    return this.http.delete(this.sponsorUrl + '/delete/' + sponsor.idSponsor);
  }
  public findByIdSponsor(idSponsor) {
    return this.http.get(this.sponsorUrl + '/findById/' + idSponsor);
  }

  public updatSponsor(sponsor: Sponsor) {

    return this.http.patch(this.sponsorUrl + '/sponsor/' + sponsor.idSponsor, sponsor);

  }
  public searchById(id: number): Observable<Sponsor[]> {
    console.log('getSponsor ca marche??');
    return this.http.get<Sponsor[]>(this.sponsorUrl + '/listSponsor/'+id);
  }
}
