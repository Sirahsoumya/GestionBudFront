import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Marche} from "../modules/marche";
import {Programme} from "../modules/programme";


@Injectable({
  providedIn: 'root'
})
export class MarcheService {
  private marcheUrl: string;
  constructor(private http: HttpClient) {
    this.marcheUrl = 'http://localhost:8081/marches';
  }
  public getAllMarche(): Observable<Marche[]> {
    console.log('getMarche ca marche??');
    return this.http.get<Marche[]>(this.marcheUrl + '/all');
  }
  public saveMarche(marche: Marche) {
    return this.http.post<Marche>(this.marcheUrl + '/save', marche);
  }
  public deleteMarche(marche: Marche) {
    return this.http.delete(this.marcheUrl + '/delete/' + marche.idMarche);
  }

  public findByIdMarche(idMarche) {
    return this.http.get(this.marcheUrl + '/findId/' + idMarche);
  }

  public updateMarche(marche: Marche) {
    return this.http.patch(this.marcheUrl + '/marche/' + marche.idMarche, marche);

  }



}
