import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public title: any;
  public user: User | any;
  public token: any;
  public identity: any;
  public status: any;
  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Sign in';
    this.user = new User('','','','','');
   }

  ngOnInit(): void {
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;

        if(!this.identity || !this.identity._id){
          alert('El usuario no se ha logueado correctamente')
        }else{
          this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //Conseguir el token
          this._userService.signup(this.user, undefined).subscribe(
            response => {
              this.token = response.token;

              if(this.token <= 0){
                alert('El token no se ha generado');
              }else{
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this._router.navigate(['/mensajes']);
              }
            },
            error => {
              console.log(<any>error);
            }
          );

          
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

}
