import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SourcheBudget} from '../modules/SourceBudget';
import {Programme} from '../modules/programme';
import {Recette} from "../modules/Recette";

@Injectable({
  providedIn: 'root'
})
export class SourceBudgetService {

  private sourchUrl: string;

  constructor(private http: HttpClient) {
    this.sourchUrl = 'http://localhost:8081/sourceBudgets';
  }
  public getAllSource(): Observable<SourcheBudget[]> {
    return this.http.get<SourcheBudget[]>(this.sourchUrl + '/all');
  }

  public saveSource(sourceBudget: SourcheBudget) {
    return this.http.post<SourcheBudget>(this.sourchUrl + '/save', sourceBudget);
  }
  public deleteSource(sourceBudget: SourcheBudget) {
    console.log("delete ca marche pi pas??");
    return this.http.delete(this.sourchUrl + '/delete/' + sourceBudget.idSourceBudget);
  }
  public findByIdSourcheBudget(idSourceBudget) {
    return this.http.get(this.sourchUrl + '/findById/' + idSourceBudget);
  }

  public updateSourcheBudget(sourceBudget: SourcheBudget) {

    return this.http.patch(this.sourchUrl + '/source/' + sourceBudget.idSourceBudget, sourceBudget);

  }
}
