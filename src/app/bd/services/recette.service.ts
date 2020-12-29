import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recette} from '../modules/Recette';
import {StatutDemande} from "../modules/StatutDemande";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recetteUrl: string;
  constructor(private http: HttpClient) {
    this.recetteUrl = 'http://localhost:8081/recettes';
  }
  public getAllRecette(): Observable<Recette[]> {
    console.log('getRecette ca marche??');
    return this.http.get<Recette[]>(this.recetteUrl + '/all');
  }
  public saveRecette(recette: Recette) {
    return this.http.post<Recette>(this.recetteUrl + '/save', recette);
  }
  public deleteRecette(recette: Recette) {
    return this.http.delete(this.recetteUrl + '/delete/' + recette.idRecette);
  }

  public findByIdRecette(idRecette) {
    return this.http.get(this.recetteUrl + '/findById/' + idRecette);
  }

  public updateRecette(recette: Recette) {

    return this.http.patch(this.recetteUrl + '/rec/' + recette.idRecette, recette);

  }

}
