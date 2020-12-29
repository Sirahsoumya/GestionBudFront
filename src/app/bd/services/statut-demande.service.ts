import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Orientation} from '../modules/orientation';
import {StatutDemande} from '../modules/StatutDemande';
import {StatutProjet} from "../modules/StatutProjet";

@Injectable({
  providedIn: 'root'
})
export class StatutDemandeService {

  private statutDemandeUrl: string;
  constructor(private http: HttpClient) {
    this.statutDemandeUrl = 'http://localhost:8081/statutDemande';
  }
  public getAllStatutDemande(): Observable<StatutDemande[]> {
    return this.http.get<StatutDemande[]>(this.statutDemandeUrl + '/all');
  }
  public saveStatutDemande(statutDemande: StatutDemande) {
    return this.http.post<Orientation>(this.statutDemandeUrl + '/save', statutDemande);
  }
  public deleteStatutDemande(statutDemande: StatutDemande) {
    return this.http.delete(this.statutDemandeUrl + '/delete/' + statutDemande.idStatut);
  }
  //pour modifier
  public findByIdStatutDemande(idStatut) {
    return this.http.get(this.statutDemandeUrl + '/findById/' + idStatut);
  }

  public updateStatutDemande(statutDemande: StatutDemande) {

    return this.http.patch(this.statutDemandeUrl + '/statut/' + statutDemande.idStatut, statutDemande);

  }

}
