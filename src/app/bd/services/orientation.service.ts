import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orientation} from '../modules/orientation';
import {Observable} from 'rxjs';
import {Type} from "../modules/Type";

@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  private orientationsUrl: string;
  constructor(private http: HttpClient) {
    this.orientationsUrl = 'http://localhost:8081/orientations';
  }
  public getAllOrientation(): Observable<Orientation[]> {
    return this.http.get<Orientation[]>(this.orientationsUrl + '/all');
  }
  public saveOrientation(orientation: Orientation) {
    return this.http.post<Orientation>(this.orientationsUrl + '/save', orientation);
  }
  public deleteOrient(orientation: Orientation) {
    return this.http.delete(this.orientationsUrl + '/delete/'+ orientation.numOrientation);
  }
  // modifier
  public findByIdOrientation(numOrientation) {
    return this.http.get(this.orientationsUrl + '/findOrientById/' + numOrientation);
  }

  public updateOrientation(orientation: Orientation) {
    return this.http.patch(this.orientationsUrl + '/orient/' + orientation.numOrientation, orientation);

  }

}
