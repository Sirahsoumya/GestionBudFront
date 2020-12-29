import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../modules/Type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private typeUrl: string;
  constructor(private http: HttpClient) {
    this.typeUrl = 'http://localhost:8081/type';
  }
  public getAllType(): Observable<Type[]> {
    console.log('getType ca marche??');
    return this.http.get<Type[]>(this.typeUrl + '/all');
  }
  public saveType(type: Type) {
    return this.http.post<Type>(this.typeUrl + '/save', type);
  }
  public deleteType(type: Type) {
    return this.http.delete(this.typeUrl + '/delete/' + type.idType);
  }
  //pour modifier
  public findByIdType(idType) {
    return this.http.get(this.typeUrl + '/findId/' + idType);
  }

  public updateTyp(type: Type) {
    console.log(this.typeUrl + '/typ/' + type.idType);
    return this.http.patch(this.typeUrl + '/typ/' + type.idType, type);

  }
}
