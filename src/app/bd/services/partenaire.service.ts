import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sponsor} from "../modules/Sponsor";
import {Partenaire} from "../modules/Partenaire";
import {Indicateur} from "../modules/Indicateur";

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private partenaireUrl: string;
  constructor(private http: HttpClient) {
    this.partenaireUrl = 'http://localhost:8081/partenaires';
  }
  public getAllPartenaire(): Observable<Partenaire[]> {
    console.log('getSponsor ca marche??');
    return this.http.get<Partenaire[]>(this.partenaireUrl + '/all');
  }
  public savePartenaire(partenaire: Partenaire) {
    return this.http.post<Partenaire>(this.partenaireUrl + '/save', partenaire);
  }
  public deletePartenaire(partenaire: Partenaire) {
    return this.http.delete(this.partenaireUrl + '/delete/' + partenaire.idPartenaire);
  }
  public findByIdPartenaire(idPartenaire) {
    return this.http.get(this.partenaireUrl + '/findById/' + idPartenaire);
  }

  public updatPartenaire(partenaire: Partenaire) {

    return this.http.patch(this.partenaireUrl + '/part/' + partenaire.idPartenaire, partenaire);

  }
}
