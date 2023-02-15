import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Messages } from '../models/messages';
import { GLOBAL } from './global';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  public identity: any;
  public token: any;

  constructor(
    public http: HttpClient
  ) { 
    this.url = GLOBAL;
  }

  // ================================================
  // CREAR UN MENSAJE 
  // ================================================
  message(message: Messages): Observable<any>{
		let params = JSON.stringify(message);
		let headers = new HttpHeaders({'Content-Type': 'application/json'});	

		return this.http.post(this.url+'/post-message', params, {headers: headers});
	}