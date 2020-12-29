import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compagne} from '../modules/Compagne';
import {Type} from "../modules/Type";

@Injectable({
  providedIn: 'root'
})
export class CompagneService {

  private compagneUrl: string;
  constructor(private http: HttpClient) {
    this.compagneUrl = 'http://localhost:8081/compagne';
  }
  public getAllCompagne(): Observable<Compagne[]> {
    return this.http.get<Compagne[]>(this.compagneUrl + '/all');
  }
  public saveCompagne(compagne: Compagne) {
    return this.http.post<Compagne>(this.compagneUrl + '/save', compagne);
  }
  public deleteCompagne(compagne: Compagne) {
    return this.http.delete(this.compagneUrl + '/delete/' + compagne.idCompagne );
  }

  //pour modifier
  public findByIdCompagne(idCompagne) {
    return this.http.get(this.compagneUrl + '/findId/' + idCompagne);
  }

  public updateCompagne(compagne: Compagne) {
    return this.http.patch(this.compagneUrl + '/compagn/' + compagne.idCompagne, compagne);

  }
  //piece jointe
  /*postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
  }*/
}
