import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programme} from "../modules/programme";
import {Orientation} from "../modules/orientation";


@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
   private programmeUrl: string;
  constructor(private http: HttpClient) {
    this.programmeUrl = 'http://localhost:8081/programmes';
  }
  public getAllProgramme(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.programmeUrl + '/all');
  }
  public saveProgramme(programme: Programme) {
    return this.http.post<Programme>(this.programmeUrl + '/save', programme);
  }
  public deleteProgramme(programme: Programme) {
    console.log("delete service");
    return this.http.delete(this.programmeUrl + '/delete/' + programme.numProgramme);
  }
  // modifier
  public findByIdProgramme(numProgramme) {
    return this.http.get(this.programmeUrl + '/findById/' + numProgramme);
  }

  public updateProgramme(programme: Programme) {
    return this.http.patch(this.programmeUrl + '/prog/' + programme.numProgramme, programme);

  }
}
