import { Component, OnInit } from '@angular/core';
import { Messages } from '../../models/messages';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';

import { GLOBAL } from '../../services/global';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: [
  ]
})
export class MessagesComponent implements OnInit {
  public messages: Messages | any;
  public token: any;
  public identity: any;
  public url: any;

  constructor(
    private messageService: MessageService,
    public userService: UserService,
    private route: ActivatedRoute
  ) {
  	this.messages = new Messages('', '', '');
  	this.identity = this.userService.getIdentity();
  	this.token = this.userService.getToken();
  	this.url = GLOBAL;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.messageService.messagePost(this.token, this.messages).subscribe(
      response => {
          console.log(this.messages)

          this.messages = new Messages('', '', '');
        
      },
      error => {
        console.log(error as any);
      }
    );
  }



}
