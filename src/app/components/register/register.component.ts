import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  public title: any;
  public user: User | any;
  public status: string | any;
  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
    private _userService: UserService
  ) { 
    
    this.title = 'Welcome to wires';
    this.user = new User('','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(registerForm: any){
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user){
          this.status = 'success';
          this.user = new User('','','','', '');
          registerForm.reset();
        }else{
          this.status = 'error';
        }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
