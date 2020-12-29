import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Depense} from '../modules/Depense';
import {Mandat} from "../modules/Mandat";

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  private depenseUrl: string;
  constructor(private http: HttpClient) {
    this.depenseUrl = 'http://localhost:8081/depenses';
  }
  public getAllDepense(): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.depenseUrl + '/all');
  }
  public saveDepense(depense: Depense) {
    return this.http.post<Depense>(this.depenseUrl + '/save', depense);
  }
  public deleteDepense(depense: Depense) {
    return this.http.delete(this.depenseUrl + '/delete/' + depense.idDepense);
  }
  public findByIdDepense(idDepense) {
    return this.http.get(this.depenseUrl + '/findId/' + idDepense);
  }

  public updateDepense(depense: Depense) {
    return this.http.patch(this.depenseUrl + '/dep/' + depense.idDepense, depense);

  }
}
