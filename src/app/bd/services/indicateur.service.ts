import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Marche} from "../modules/marche";
import { Indicateur } from '../modules/Indicateur';
import {Fonctionnaire} from "../modules/Fonctionnaire";

@Injectable({
  providedIn: 'root'
})
export class IndicateurService {
  private indicateurUrl: string;

  constructor(private http: HttpClient) {
    this.indicateurUrl = 'http://localhost:8081/indicateurs';
  }

  public getAllIndicateur(): Observable<Indicateur[]> {
    console.log('getindicateur ca marche??');
    return this.http.get<Indicateur[]>(this.indicateurUrl + '/all');
  }

  public saveIndicateur(indicateur: Indicateur) {
    return this.http.post<Indicateur>(this.indicateurUrl + '/save', indicateur);
  }

  public deleteIndicateur(indicateur: Indicateur) {
    return this.http.delete(this.indicateurUrl + '/delete/' + indicateur.idIndicateur);
  }

  public findByIdIndicateur(idIndicateur) {
    return this.http.get(this.indicateurUrl + '/findId/' + idIndicateur);
  }

  public updateIndicateur(indicateur: Indicateur) {

    return this.http.patch(this.indicateurUrl + '/ind/' + indicateur.idIndicateur, indicateur);

  }
}
