import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { Messages } from '../../../models/messages'
@Component({
  selector: 'app-get-messages',
  templateUrl: './get-messages.component.html',
  styles: [
  ]
})
export class GetMessagesComponent implements OnInit {
    public token: any;
    public messages: Messages[] | any;
    public url: any;
  constructor(
    private messageService: MessageService,
    public userService: UserService,
  ) {
    this.token = this.userService.getToken();

   }

  ngOnInit(): void {
    this.getMessage()
  }
  
  getMessage() {    
    this.messageService.getMessage(this.token).subscribe(
      response => {
       this.messages = response.messages;
       
       console.log(this.messages)
      },
      error => {
        console.log(error as any);
      }
    );
  }
}
