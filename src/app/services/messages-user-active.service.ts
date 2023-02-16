import { Injectable } from '@angular/core';
import { Messages } from '../models/messages';
import { GLOBAL } from './global';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessagesUserActiveService {

  public url: string;

  constructor(
    public http: HttpClient
    ) {
      this.url = GLOBAL;
  }

  /***********************************************
   LISTAR TODOS LOS MENSAJES DEL USUARIO ACTIVO
  /***********************************************/
  getMessageUserActive(token: any): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json',
      Authorization: token
    }));


    return this.http.get(this.url + '/get-message-current-user', {headers});
  }
}
