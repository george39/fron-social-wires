import { Injectable } from '@angular/core';
import { Messages } from '../models/messages';
import { GLOBAL } from './global';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public url: string;

  constructor(
    public http: HttpClient
    ) {
      this.url = GLOBAL;

  }

  /***********************************************
   GUARDAR UN MENSAJE
  /***********************************************/
  messagePost(token: any, message:any): Observable<any> {
    let params = JSON.stringify(message);
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json',
      Authorization: token
    }));

    return this.http.post(this.url + '/post-message', params, {headers} );
  }

  /***********************************************
   LISTAR TODOS LOS MENSAJES
  /***********************************************/
  getMessage(token: any): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json',
      Authorization: token
    }));


    return this.http.get(this.url + '/get-message', {headers});
  }
}
