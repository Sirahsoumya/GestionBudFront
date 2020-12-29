import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Indicateur} from "../modules/Indicateur";
import {Fonctionnaire} from "../modules/Fonctionnaire";
import {DemandeTransfert} from "../modules/DemandeTransfert";

@Injectable({
  providedIn: 'root'
})
export class FonctionnaireService {
  private fonctionnaireUrl: string;

  constructor(private http: HttpClient) {
    this.fonctionnaireUrl = 'http://localhost:8081/fonctionnaires';
  }

  public getAllFonctionnaire(): Observable<Fonctionnaire[]> {
    console.log('getFonctionnaire ca marche??');
    return this.http.get<Fonctionnaire[]>(this.fonctionnaireUrl + '/all');
  }

  public saveFonctionnaire(fonctionnaire: Fonctionnaire) {
    return this.http.post<Fonctionnaire>(this.fonctionnaireUrl + '/save', fonctionnaire);
  }

  public deleteFonctionnaire(fonctionnaire: Fonctionnaire) {
    return this.http.delete(this.fonctionnaireUrl + '/delete/' + fonctionnaire.idFonctionnaire);
  }

  public findByIdFonctionnaire(idFonctionnaire) {
    return this.http.get(this.fonctionnaireUrl + '/findId/' + idFonctionnaire);
  }

  public updateFonctionnaire(fonctionnaire: Fonctionnaire) {

    return this.http.patch(this.fonctionnaireUrl + '/fonction/' + fonctionnaire.idFonctionnaire, fonctionnaire);

  }
}

