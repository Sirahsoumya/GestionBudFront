import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mandat} from '../modules/Mandat';
import {Marche} from "../modules/marche";

@Injectable({
  providedIn: 'root'
})
export class MandatService {
  private mandatUrl: string;

  constructor(private http: HttpClient) {
    this.mandatUrl = 'http://localhost:8081/mandats';
  }
  public getAllMandat(): Observable<Mandat[]> {
    return this.http.get<Mandat[]>(this.mandatUrl + '/all');
  }
  public saveMandat(mandat: Mandat) {
    return this.http.post<Mandat>(this.mandatUrl + '/save', mandat);
  }
  public deleteMandat(mandat: Mandat) {
    return this.http.delete(this.mandatUrl + '/delete/' + mandat.numMandat);
  }
  public findByIdMandat(numMandat) {
    return this.http.get(this.mandatUrl + '/findMandatById/' + numMandat);
  }

  public updateMandat(mandat: Mandat) {
    return this.http.patch(this.mandatUrl + '/mandat/' + mandat.numMandat, mandat);

  }
}
