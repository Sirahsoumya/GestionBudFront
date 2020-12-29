import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sponsor} from "../modules/Sponsor";
import {StatutProjet} from "../modules/StatutProjet";
import {Type} from "../modules/Type";

@Injectable({
  providedIn: 'root'
})
export class StatutProjetService {
  private statutProjetUrl: string;
  constructor(private http: HttpClient) {
    this.statutProjetUrl = 'http://localhost:8081/statutProjet';
  }
  public getAllStatutP(): Observable<StatutProjet[]> {
    console.log('StatutProjet ca marche??');
    return this.http.get<StatutProjet[]>(this.statutProjetUrl + '/all');
  }
  public saveStatutP(statutProjet: StatutProjet) {
    return this.http.post<StatutProjet>(this.statutProjetUrl + '/save', statutProjet);
  }
  public deleteStatutP(statutProjet: StatutProjet) {
    return this.http.delete(this.statutProjetUrl + '/delete/' + statutProjet.idStatut);
  }
  //pour modifier
  public findByIdStatut(idStatut) {
    return this.http.get(this.statutProjetUrl + '/findById/' + idStatut);
  }

  public updateStatut(statutProjet: StatutProjet) {

    return this.http.patch(this.statutProjetUrl + '/statutProj/' + statutProjet.idStatut, statutProjet);

  }
}

