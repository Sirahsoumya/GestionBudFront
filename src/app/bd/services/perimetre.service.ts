import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatutProjet} from "../modules/StatutProjet";
import {Perimetre} from "../modules/Perimetre";
import {Programme} from "../modules/programme";

@Injectable({
  providedIn: 'root'
})
export class PerimetreService {
  private perimetretUrl: string;

  constructor(private http: HttpClient) {
    this.perimetretUrl = 'http://localhost:8081/perimetres';
  }
  public getAllPerimetre(): Observable<Perimetre[]> {
    console.log('getperimetre ca marche??');
    return this.http.get<Perimetre[]>(this.perimetretUrl + '/all');
  }
  public savePerimetre(perimetre: Perimetre) {
    return this.http.post<Perimetre>(this.perimetretUrl + '/save', perimetre);
  }
  public deletePerimetre(perimetre: Perimetre) {
    return this.http.delete(this.perimetretUrl + '/delete/' + perimetre.idPerimetre);
  }
  // modifier
  public findByIdPerimetre(idPerimetre) {
    return this.http.get(this.perimetretUrl + '/findById/' + idPerimetre);
  }

  public updatePerimetre(perimetre: Perimetre) {
    console.log('service permitre!!');
    return this.http.patch(this.perimetretUrl + '/Perimetr/' + perimetre.idPerimetre, perimetre);

  }
}


