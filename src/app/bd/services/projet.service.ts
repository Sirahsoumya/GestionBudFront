import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../modules/projet';
import {Partenaire} from "../modules/Partenaire";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projetsUrl: string;
  constructor(private http: HttpClient) {
    this.projetsUrl = 'http://localhost:8081/projets';
  }

  public getAllProjet(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.projetsUrl + '/all');
  }
  public saveProjet(projet: Projet) {
    return this.http.post<Projet>(this.projetsUrl + '/save', projet);
  }
  public deleteProjet(projet: Projet) {
    return this.http.delete(this.projetsUrl + '/delete/' + projet.idProjet);
  }
  //pour lister les projets en retard
  public getRetartedProjet(): Observable<Projet[]> {
    console.log('service projet en retard');
    return this.http.get<Projet[]>(this.projetsUrl + '/retartedProject');
  }
  public findByIdProjet(idProjet) {
    return this.http.get(this.projetsUrl + '/byId/' + idProjet);
  }

  public updatProjet(projet: Projet) {

    return this.http.patch(this.projetsUrl + '/proj/' + projet.idProjet, projet);

  }

}
