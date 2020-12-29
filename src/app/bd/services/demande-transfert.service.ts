import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemandeTransfert} from '../modules/DemandeTransfert';
import {SourcheBudget} from "../modules/SourceBudget";

@Injectable({
  providedIn: 'root'
})
export class DemandeTransfertService {

  private demandeTransfertUrl: string;
  constructor(private http: HttpClient) {
    this.demandeTransfertUrl = 'http://localhost:8081/demandeTransfert';
  }
  public getAllDemandeTransfert(): Observable<DemandeTransfert[]> {
    return this.http.get<DemandeTransfert[]>(this.demandeTransfertUrl + '/all');
  }
  public saveDemandeTransfert(demandeTransfer: DemandeTransfert) {
    return this.http.post<DemandeTransfert>(this.demandeTransfertUrl + '/save', demandeTransfer);
  }
  public deleteDemandeTransfert(demandeTransfer: DemandeTransfert) {
    console.log('service delete demabdeTransf');
    console.log(demandeTransfer.numDemande);
    return this.http.delete(this.demandeTransfertUrl + '/delete/' + demandeTransfer.numDemande);
    //return this.http.delete(this.demandeTransfertUrl +'/' + demandeTransfer.numDemande);
  }
  public findByIdDemandeTransfert(numDemande) {
    return this.http.get(this.demandeTransfertUrl + '/findId/' + numDemande);
  }

  public updateDemandeTransfert(demandeTransfer: DemandeTransfert) {

    return this.http.patch(this.demandeTransfertUrl + '/demTransfert/' + demandeTransfer.numDemande, demandeTransfer);

  }
}
