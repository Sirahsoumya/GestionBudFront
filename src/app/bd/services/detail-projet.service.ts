import { Injectable } from '@angular/core';
import {Projet} from '../modules/projet';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailProjetService {

  private projetsUrl: string;
  constructor(private http: HttpClient) {
    this.projetsUrl = 'http://localhost:8081/projets';
  }
  public findByIdProjet(idProjet) {
    return this.http.get(this.projetsUrl + '/byId/' + idProjet);
  }
}
