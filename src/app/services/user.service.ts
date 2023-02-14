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

    // ================================================
    // LOGIN
    // ================================================
    signup(user_to_login: any, gettoken = null): Observable<any>{
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }
        let params = JSON.stringify(user_to_login);
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post(this.url+'/login', params, {headers: headers});
    }

    getIdentity(){
        // let identity = JSON.parse(localStorage.getItem('identity'));
        let identity = JSON.stringify(localStorage.getItem('identity'));

        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }  


  

}
