import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public Messages = [
    { 
      id: 1,
      userId: 1,
      userName: 'bot',
      text: '123123'
    },
    { 
      id: 2,
      userId: 2,
      userName: 'user',
      text: 'sdfsdffrwerwerwe'
    },
    { 
      id: 3,
      userId: 1,
      userName: 'bot',
      text: 'sfsdfsdfsd'
    },
    { 
      id: 4,
      userId: 2,
      userName: 'user',
      text: 'fghfgnfgbdfvd dfvd fvdfv'
    },
    { 
      id: 4,
      userId: 2,
      userName: 'user',
      text: 'fghfgnfgbdfvd dfvd fvdfv 2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
