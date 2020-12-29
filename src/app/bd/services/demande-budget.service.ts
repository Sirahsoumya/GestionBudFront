import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemandeBudget} from '../modules/DemandeBudget';
import {DemandeTransfert} from "../modules/DemandeTransfert";


@Injectable({
  providedIn: 'root'
})
export class DemandeBudgetService {

  private demandeBudgetUrl: string;
  constructor(private http: HttpClient) {
    this.demandeBudgetUrl = 'http://localhost:8081/demandeBudget';
  }

  public getAllDemandeBudget(): Observable<DemandeBudget[]> {
    return this.http.get<DemandeBudget[]>(this.demandeBudgetUrl + '/all');
  }
  public saveDemandeBudget(demandeBudget: DemandeBudget) {
    console.log('service demande budget');
    return this.http.post<DemandeBudget>(this.demandeBudgetUrl + '/save', demandeBudget);
  }
  public deleteDemandeBudget(demandeBudget: DemandeBudget) {
    return this.http.delete(this.demandeBudgetUrl + '/delete/' + demandeBudget.idDemande);
  }
  public findByIdDemandeBudget(idDemande) {
    return this.http.get(this.demandeBudgetUrl + '/findId/' + idDemande);
  }

  public updateDemandeBudget(demandeBudget: DemandeBudget) {

    return this.http.patch(this.demandeBudgetUrl + '/demBudget/' + demandeBudget.idDemande, demandeBudget);

  }

}
