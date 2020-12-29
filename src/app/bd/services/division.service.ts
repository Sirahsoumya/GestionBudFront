import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Devision} from '../modules/Devision';
import {StatutProjet} from "../modules/StatutProjet";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  private divisionUrl: string;

  constructor(private http: HttpClient) {
    this.divisionUrl = 'http://localhost:8081/divisions';
  }

  public getAllDevision(): Observable<Devision[]> {
    return this.http.get<Devision[]>(this.divisionUrl + '/all');
  }

  public saveDevision(devision: Devision) {
    console.log(devision.libelle);
    return this.http.post<Devision>(this.divisionUrl + '/save', devision);
  }

  public deleteDevision(devision: Devision) {
    return this.http.delete(this.divisionUrl + '/delete/' + devision.idDevision);
  }
  //pour modifier
  public findByIdDivision(idDevision) {
    return this.http.get(this.divisionUrl + '/findId/' + idDevision);
  }

  public updateDivision(devision: Devision) {

    return this.http.patch(this.divisionUrl + '/div/' + devision.idDevision, devision);

  }
}

