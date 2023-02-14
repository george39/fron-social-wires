import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from '../models/user';
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
  // CREAR UN USUARIO 
  // ================================================
  register(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders({'Content-Type': 'application/json'});	

		return this.http.post(this.url+'/save-user', params, {headers: headers});
	}


  

}
