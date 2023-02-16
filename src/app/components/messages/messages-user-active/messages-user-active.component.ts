import { Component, OnInit } from '@angular/core';
import { MessagesUserActiveService } from 'src/app/services/messages-user-active.service';
import { UserService } from 'src/app/services/user.service';
import { Messages } from '../../../models/messages'



@Component({
  selector: 'app-messages-user-active',
  templateUrl: './messages-user-active.component.html',
  styles: [
  ]
})
export class MessagesUserActiveComponent implements OnInit {

    public token: any;
    public messages: Messages[] | any;
    public url: any;
  constructor(
    private messageService: MessagesUserActiveService,
    public userService: UserService,
  ) {
    this.token = this.userService.getToken();

   }

  ngOnInit(): void {
    this.getMessages()
  }
  
  getMessages() {    
    this.messageService.getMessageUserActive(this.token).subscribe(
      response => {
        this.messages = response.messages;
        console.log('mensaje', this.messages)
       
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
